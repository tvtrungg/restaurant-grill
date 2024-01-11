import CustomContent from "@/app/components/CustomContent";

function ContactPage() {
  return (
    <main className="contact-container">
      <CustomContent
        brand="brand"
        intro="contact_page.intro"
        title="contact_page.title"
        background="banner-contact-bg"
      >
        <div className="w-[80%] aspect-video mx-auto overflow-hidden rounded-[40px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.664952437646!2d-75.73760088872885!3d45.355575240559915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0723b98c4127%3A0x3e3e1a85b5687985!2sSip%20Tea!5e0!3m2!1svi!2s!4v1695745335474!5m2!1svi!2s"
            width="1280"
            height="720"
            loading="lazy"
          ></iframe>
        </div>
      </CustomContent>
    </main>
  );
}

export default ContactPage;
