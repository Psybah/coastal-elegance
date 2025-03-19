import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="27872656105"
      accountName="Coastal Elegance"
      statusMessage="Typically replies within 30 minutes"
      chatMessage="Hello! 👋 How can we assist you with your travel plans today?"
      placeholder="Type your message..."
      avatar="/whatsapp.png"
      allowClickAway={true}
      notification={true}
      notificationDelay={30}
      notificationSound={true}
      darkMode={false}
      className="whatsapp-button"
      style={{
        // Adjust position to match your layout
        zIndex: 999
      }}
    />
  );
};

export default WhatsAppButton;