import MyInfo from "./MyInfo";

const Contact = () => {
  return (
    <section className="max-w-xl p-4 mx-auto text-center bg-teal-500 drop-shadow-2xl rounded-md sm:w-4/5 sm:p-8">
      <h3 className="text-2xl font-bold font-heading py-6 s:text-3xl md:text-4xl xl:text-5xl">
        Interested in doing a project together?
      </h3>

      <p className="text-base text-center leading-loose pb-6 xl:text-xl">
        Ready to take it to the next level? Contact me today and find out how my
        expertise can help your business grow.
      </p>
      <MyInfo />
    </section>
  );
};

export default Contact;
