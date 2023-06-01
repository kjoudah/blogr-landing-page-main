import editorMobile from './../images/illustration-editor-mobile.svg';
import editorDesktop from './../images/illustration-editor-desktop.svg';
import phonesImage from './../images/illustration-phones.svg';
import laptopImageMobile from './../images/illustration-laptop-mobile.svg';
import laptopImageDesktop from './../images/illustration-laptop-desktop.svg';
export default function Body() {
  return (
    <main className="flex flex-col gap-24 py-24">
      <article className="grid grid-col-1 text-center justify-items-center gap-8 items-center lg:grid-cols-2 lg:gap-y-16 lg:text-start px-[5vw] mx-auto max-w-screen-2xl">
        <Heading className="lg:col-span-2">Designed for the future</Heading>
        <div className="order-2 lg:order-3">
          <picture>
            <source srcSet={editorDesktop} media="(min-width:80em)" />
            <img src={editorMobile} alt="editor image"></img>
          </picture>
        </div>
        <div className="flex flex-col gap-12 order-3 lg:order-2">
          <section className="flex flex-col gap-4">
            <Heading>Introducting an extensible editor</Heading>
            <Paragraph>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </Paragraph>
          </section>

          <section className="flex flex-col gap-4">
            <Heading>Robust content management</Heading>
            <Paragraph>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </Paragraph>
          </section>
        </div>
      </article>
      <article className="relative grid grid-col-1 text-center gap-4 mt-40 ">
        <div className="w-full absolute z-10 top-0 -translate-y-1/2 xl:w-auto xl:-translate-y-1/4 xl:left-1/2 xl:-translate-x-full">
          <img
            className="w-80 mx-auto xl:w-auto xl:mx-0"
            src={phonesImage}
            aria-hidden="true"
            alt="phones"
          ></img>
        </div>
        <div className="relative infrastructure-background-mobile pt-40 pb-32 flex flex-col gap-8 xl:pl-[50%] xl:text-start xl:pr-12 xl:py-24">
          <Heading className="text-white z-20 text-3xl">
            State of the Art Infrastructure
          </Heading>
          <Paragraph className="text-white z-20 xl:max-w-2xl">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </Paragraph>
        </div>
      </article>
      <article className="grid grid-col-1 text-center justify-items-center gap-8 items-center lg:grid-cols-2 lg:gap-y-16 lg:text-start px-[5vw] mx-auto max-w-screen-2xl">
        <div>
          <picture>
            <source srcSet={laptopImageDesktop} media="(min-width:80em)" />
            <img src={laptopImageMobile} alt="laptop image"></img>
          </picture>
        </div>
        <div className="flex flex-col gap-12">
          <section className="flex flex-col gap-4">
            <Heading>Free, open, simple</Heading>
            <Paragraph>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </Paragraph>
          </section>
          <section className="flex flex-col gap-4">
            <Heading>Powerful tooling</Heading>
            <Paragraph>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </Paragraph>
          </section>
        </div>
      </article>
    </main>
  );
}

const Heading = props => {
  return (
    <h2
      className={`font-heading text-blue-600 text-2xl font-bold md:text-3xl lg:text-4xl px-8 ${props?.className}`}
    >
      {props.children}
    </h2>
  );
};

const Paragraph = props => {
  return (
    <p
      className={`font-heading text-blue-400 px-8 md:text-xl lg:text-2xl ${props.className}`}
    >
      {props.children}
    </p>
  );
};
