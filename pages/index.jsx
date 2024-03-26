// this is the main root route of the application.

import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          router.push("/About");

          console.log("btn clicked");
        }}
      >
        About
      </button>
      {/* <Link href="/About" replace>
        About
      </Link> */}
      {/* by uncommenting the above line and commenting the button , we can also navigate with the help of Link */}
      {/* the "replace" prop in the Link tag assures that whenever we click the back button, we'll be navigated to the root route of
       the app means home page. we can use "replace" prop anywhere where we can see that clicking the back button is not navigating
        us to home page where we want to be navigated.
       */}
    </div>
  );
}

export default Home;
