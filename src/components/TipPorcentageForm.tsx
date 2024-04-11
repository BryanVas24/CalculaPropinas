const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
type propType = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};
const TipPorcentageForm = ({ setTip, tip: tipProp }: propType) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>
      <form>
        {tipOptions.map((tip) => (
          <div key={tip.id}>
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              //el + al inicio de e.target hace que se convierta a numero
              onChange={(e) => setTip(+e.target.value)}
              type="radio"
              id={tip.id}
              value={tip.value}
              name="tip"
              checked={tip.value === tipProp}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPorcentageForm;
