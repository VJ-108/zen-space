import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubscriptionPlans } from "../utils/constant";
import Button from "./ui/Button";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const SubscriptionCard = ({
  plan,
}: {
  plan: { title: string; price: string; perks: Array<string> };
}) => {
  const { title, price, perks } = plan;
  return (
    <>
      <div className="border rounded-lg p-8 cursor-pointer">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-200 my-4 text-center">
          {title}
        </h3>
        <p className="text-gray-300 text-xl md:text-2xl text-center my-4">
          {price}
        </p>
        <Button size={"large"} variant={"focus"} className="w-full my-10">
          Choose Plan
        </Button>
        <h2 className="text-lg md:text-xl text-gray-200">This includes: </h2>
        <ul className="text-gray-400 my-4 md:my-6 text-lg md:text-xl">
          {perks.map((perk, index) => (
            <li key={index} className="py-1 md:py-3">
              <FontAwesomeIcon icon={faCircleCheck} /> {perk}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const Subscriptions = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-0 md:mt-16">
        <div className="text-2xl md:text-6xl font-bold mb-16 text-center">
          Choose Your Plan
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SubscriptionPlans.map((plan, index) => {
            return <SubscriptionCard key={index} plan={plan} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
