import { SubscriptionPlans } from "../utils/constant";
import SubscriptionTemplate from "./ui/SubscriptionTemplate";

const Subscriptions = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-0 md:mt-16">
        <div className="text-2xl md:text-6xl font-bold mb-16 text-center">
          Choose Your Plan
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SubscriptionPlans.map((plan, index) => {
            return (
              <SubscriptionTemplate
                key={index}
                title={plan.title}
                price={plan.price}
                perks={plan.perks}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
