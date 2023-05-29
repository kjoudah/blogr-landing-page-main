import editorMobile from './../images/illustration-editor-mobile.svg';
import editorDesktop from './../images/illustration-editor-desktop.svg';
import phonesImage from './../images/illustration-phones.svg';
import laptopImageMobile from './../images/illustration-laptop-mobile.svg';
import laptopImageDesktop from './../images/illustration-laptop-desktop.svg';
export default function Body() {
  return (
    <main className="flex flex-col gap-24 py-24">
      <article className="grid grid-col-1 text-center gap-4 justify-items-center">
        <Heading>Designed for the future</Heading>
        <div>
          <img src={editorMobile} alt="editor image"></img>
        </div>
        <Heading>Introducting an extensible editor</Heading>
        <Paragraph>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </Paragraph>
        <Heading>Robust content management</Heading>
        <Paragraph>
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </Paragraph>
      </article>
      <section className="relative grid grid-col-1 text-center gap-4 mt-40">
        <div className="w-full absolute z-10 top-0 -translate-y-1/2">
          <img
            className="w-80 mx-auto"
            src={phonesImage}
            aria-hidden="true"
            alt="phones"
          ></img>
        </div>
        <div className="relative infrastructure-background-mobile pt-40 pb-32 flex flex-col gap-4">
          <Heading className="text-white z-20 text-3xl">
            State of the Art Infrastructure
          </Heading>
          <Paragraph className="text-white z-20">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </Paragraph>
        </div>
      </section>
      <article className="grid grid-col-1 text-center gap-6 justify-items-center">
        <div>
          <img src={laptopImageMobile} alt="laptop image"></img>
        </div>
        <Heading>Free, open, simple</Heading>
        <Paragraph>
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </Paragraph>
        <Heading>Powerful tooling</Heading>
        <Paragraph>
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </Paragraph>
      </article>
    </main>
  );
}

const Heading = props => {
  return (
    <h2
      className={`font-heading text-blue-600 text-2xl font-bold px-8 ${props?.className}`}
    >
      {props.children}
    </h2>
  );
};

const Paragraph = props => {
  return (
    <p className={`font-heading text-blue-400 px-8 ${props.className}`}>
      {props.children}
    </p>
  );
};
