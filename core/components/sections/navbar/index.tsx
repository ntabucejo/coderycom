import useSession from "@core/hooks/use-session";
import NonverifiedNavbar from "./non-verified";
import VerifiedNavbar from "./verified";

const NavigationBar = async () => {
  const { session } = await useSession();
  console.log(session?.user?.image);
  return (
    <>
      {session?.user ? (
        <VerifiedNavbar image={session.user.image!} />
      ) : (
        <NonverifiedNavbar />
      )}
    </>
  );
};

export default NavigationBar;
