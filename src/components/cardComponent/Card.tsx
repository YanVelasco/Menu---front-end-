import "./card.scss";

interface CardProps {
  title: string;
  price: number;
  image: string;
}

export function Card({ title, price, image }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt="Imagem do prato" />
      <h2>{title}</h2>
      <p>Valor: {price}</p>
    </div>
  );
}
