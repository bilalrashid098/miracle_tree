import AboutView from "@/view/about";

export async function getStaticProps() {
  return {
    props: {
      title: "About Us",
      description: "Detailed information for about us",
    },
  };
}

export default function About() {
  return <AboutView />;
}
