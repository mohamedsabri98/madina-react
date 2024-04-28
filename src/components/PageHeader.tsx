function PageHeader(props: any) {
  return (
    <div style={{ backgroundImage: `url(${props.image})`, height: "380px" }}>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <h1 className="text-white fw-bolder" style={{ borderBottom: "5px solid #ef381b" }}>
          {props.title}
        </h1>
      </div>
    </div>
  );
}

export default PageHeader;
