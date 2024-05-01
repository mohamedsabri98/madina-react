import "../styles/Sponsores.css"

function SponsoresItem(props: any) {
  return (
    <div className="mt-5 spon-figure">
      <div className="m-5">
        <figure>
          <a href={props.url}>
            <img
              src={props.image}
              alt="img-figure"
              style={{ width: "220px", height: "130px" }}
            />
          </a>
        </figure>
      </div>
    </div>
  );
}

export default SponsoresItem;
