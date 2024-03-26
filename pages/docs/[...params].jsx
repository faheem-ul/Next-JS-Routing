import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  // console.log(router);
  const { params = [] } = router.query;
  // console.log(params);

  if (params.length === 3) {
    return (
      <div>
        <h1>
          Viewing docs for feature {params[0]} and concept {params[1]} and
          example {params[2]}
        </h1>
      </div>
    );
  }
  if (params.length === 2) {
    return (
      <div>
        <h1>
          Viewing docs for feature {params[0]} and concept {params[1]}
        </h1>
      </div>
    );
  }
  if (params.length === 1) {
    return (
      <div>
        <h1>Viewing docs for feature {params[0]}</h1>
      </div>
    );
  }

  if (params.length > 3)
    return (
      <div>
        <h1>Docs spread file Page</h1>
      </div>
    );
}

export default Doc;
