import Star from "./Star/Star.tsx";

type StarsProps = {
  count: number
}

export default function Stars(props: StarsProps) {
  const count = props.count as number
  const showRating= count >= 1 && count <= 5;
  if (showRating) {
    const stars = Array.from(Array(count)).map((_, index) => <Star key={`star-${index + 1}`} />);
    return <ul className="card-body">{stars}</ul>
  }
  return (<ul className="card-body"/>)
}

Stars.defaultProps = {
  count: 0
}