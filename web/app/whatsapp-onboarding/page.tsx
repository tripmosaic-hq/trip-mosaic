"use client";

import { useEffect, useState } from "react";

const META_APP_ID = "27733936062956949";
const META_CONFIG_ID = "1945968386089679";

type FacebookLoginResponse = {
  authResponse?: {
    code?: string;
  };
  status?: string;
};

type EmbeddedSignupMessage = {
  type?: string;
  event?: string;
  data?: {
    waba_id?: string;
    phone_number_id?: string;
    business_id?: string;
    error_message?: string;
  };
};

declare global {
  interface Window {
    FB?: {
      init: (options: {
        appId: string;
        cookie: boolean;
        xfbml: boolean;
        version: string;
      }) => void;
      login: (
        callback: (response: FacebookLoginResponse) => void,
        options: {
          config_id: string;
          response_type: string;
          override_default_response_type: boolean;
          extras: {
            setup: Record<string, never>;
            featureType: string;
            sessionInfoVersion: string;
          };
        }
      ) => void;
    };
    fbAsyncInit?: () => void;
  }
}

export default function WhatsAppOnboardingPage() {
  const [sdkReady, setSdkReady] = useState(false);
  const [status, setStatus] = useState("Meta SDK loading...");
  const [wabaId, setWabaId] = useState("");
  const [phoneNumberId, setPhoneNumberId] = useState("");

  useEffect(() => {
    const handleSignupMessage = (event: MessageEvent) => {
      const allowedOrigins = [
        "https://www.facebook.com",
        "https://web.facebook.com",
      ];

      if (!allowedOrigins.includes(event.origin)) return;

      let payload: unknown = event.data;

      if (typeof payload === "string") {
        try {
          payload = JSON.parse(payload);
        } catch {
          return;
        }
      }

      if (!payload || typeof payload !== "object") return;

      const message = payload as EmbeddedSignupMessage;

      if (message.type !== "WA_EMBEDDED_SIGNUP") return;

      if (
        message.event === "FINISH" ||
        message.event === "FINISH_WHATSAPP_BUSINESS_APP_ONBOARDING"
      ) {
        setWabaId(message.data?.waba_id ?? "");
        setPhoneNumberId(message.data?.phone_number_id ?? "");
        setStatus("WhatsApp onboarding completed successfully.");
        return;
      }

      if (message.event === "CANCEL") {
        setStatus("Onboarding cancelled. No changes were made.");
        return;
      }

      if (message.event === "ERROR") {
        setStatus(
          message.data?.error_message ||
            "Meta onboarding में error आया।"
        );
      }
    };

    window.addEventListener("message", handleSignupMessage);

    const initializeFacebook = () => {
      window.FB?.init({
        appId: META_APP_ID,
        cookie: true,
        xfbml: false,
        version: "v26.0",
      });

      setSdkReady(true);
      setStatus("Ready to connect WhatsApp Business.");
    };

    window.fbAsyncInit = initializeFacebook;

    if (window.FB) {
      initializeFacebook();
    } else if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }

    return () => {
      window.removeEventListener("message", handleSignupMessage);
    };
  }, []);

  const launchWhatsAppSignup = () => {
    if (!window.FB || !sdkReady) {
      setStatus("Meta SDK अभी ready नहीं है। कुछ seconds बाद retry करें।");
      return;
    }

    setStatus("Opening secure Meta onboarding...");

    window.FB.login(
      (response) => {
        if (response.authResponse?.code) {
          setStatus(
            "Meta authorization received. Onboarding पूरा करें।"
          );
        } else {
          setStatus("Authorization cancelled or not completed.");
        }
      },
      {
        config_id: META_CONFIG_ID,
        response_type: "code",
        override_default_response_type: true,
        extras: {
          setup: {},
          featureType: "whatsapp_business_app_onboarding",
          sessionInfoVersion: "3",
        },
      }
    );
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "#f4d78c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "560px",
          border: "1px solid #b99545",
          borderRadius: "18px",
          padding: "32px 24px",
          textAlign: "center",
          background: "#111111",
        }}
      >
        <h1 style={{ marginBottom: "8px" }}>TRIP MOSAIC</h1>

        <p style={{ color: "#ffffff", marginBottom: "8px" }}>
          WhatsApp Business Connection
        </p>

        <p
          style={{
            color: "#cccccc",
            lineHeight: "1.6",
            marginBottom: "24px",
          }}
        >
          अपने existing WhatsApp Business number को सुरक्षित Meta
          onboarding के माध्यम से connect करें।
        </p>

        <button
          type="button"
          onClick={launchWhatsAppSignup}
          disabled={!sdkReady}
          style={{
            width: "100%",
            border: "none",
            borderRadius: "10px",
            padding: "15px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: sdkReady ? "pointer" : "not-allowed",
            background: sdkReady ? "#d4af57" : "#777777",
            color: "#080808",
          }}
        >
          Connect WhatsApp Business
        </button>

        <p
          style={{
            color: "#dddddd",
            fontSize: "14px",
            lineHeight: "1.5",
            marginTop: "20px",
          }}
        >
          {status}
        </p>

        {wabaId && (
          <div
            style={{
              marginTop: "20px",
              padding: "14px",
              background: "#1a1a1a",
              borderRadius: "10px",
              color: "#ffffff",
              textAlign: "left",
              overflowWrap: "anywhere",
            }}
          >
            <p>
              <strong>WABA ID:</strong> {wabaId}
            </p>
            <p>
              <strong>Phone Number ID:</strong>{" "}
              {phoneNumberId || "Meta confirmation pending"}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
