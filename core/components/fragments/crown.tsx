type Props = {
  title?: string;
  description?: string;
};

const Crown = ({ title, description }: Props) => {
  const head = {
    title: title ? title : "Codery",
    description: description
      ? description
      : "A Web Based Freelancing System for Software Developers is a freelance website specifically for the use of developers. The website is built with user friendly GUI and consist of features that can help to find the best clients for different projects. It includes the posting of jobs or offers of services, creating profile, can create conversations with the clients and settle payments with great security.",
  };

  return (
    <>
      <title>{head.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={head.description} />
    </>
  );
};

export default Crown;
