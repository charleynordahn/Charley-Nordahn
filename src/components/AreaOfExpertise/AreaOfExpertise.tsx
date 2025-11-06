import { FC, Fragment } from "react";

export const AreaOfExpertise: FC = () => {
  const areaOfExpertise = [
    {
      id: 1,
      number: "1",
      title: "Visuelt orienteret",
      description:
        "Visualiserer hurtigt tanker og idéer, der kan omsættes til konkrete løsninger.",
    },
    {
      id: 2,
      number: "2",
      title: "Øje for detaljen",
      description: "Skarpt blik for små detaljer og uoverensstemmelser.",
    },
    {
      id: 3,
      number: "3",
      title: "Trives med rugbrødsopgaver",
      description:
        "Er god til opgaver, der kræver gentagelse, struktur og tålmodighed.",
    },
  ];

  return (
    <div className="test">
      {areaOfExpertise.map((item) => (
        <Fragment key={item.id}>
          <div className="bg-black text-white fs-4 p-3 fw-bold">
            {item.number}
          </div>
          <div className="bg-white text-black p-3">
            <b className="fw-bold fs-4">{item.title}</b>
            <p className="text-sm mb-0">{item.description}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
