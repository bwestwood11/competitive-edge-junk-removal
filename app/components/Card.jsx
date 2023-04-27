import axios from "axios";

export default function Card({price}) {

    const handleSubscription = async (e) => {
        e.preventDefault();
        // console.log(price.id);
        const { data } = await axios.post(
          "/api/payment",
          {
            priceId: price.id,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        window.location.assign(data);
        console.log("data", data);
      };

  return (
    <div className="border-gray-100 shadow-2xl border-4 text-center mt-10 max-w-[1040px]">
      <div>
        <div className="bg-gray-100 h-28 items-center font-bold">
          <h4 className="text-2xl">{price.nickname}</h4>
          <h3 className="text-xl mt-2">First 2,000lbs Included</h3>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center pt-4">
            <h1 className="text-5xl font-bold">
              {(price.unit_amount / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
            </h1>
            <h3 className="pl-1 mt-2">Additional weight just $.05 /lb</h3>
          </div>
          {/* <pre>{JSON.stringify(price, null, 4)}</pre> */}
            <button
              onClick={(e) => handleSubscription(e)}
              className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-[#f1592a] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Rent This Dumpster
              {" "}
            </button>
        </div>
      </div>
    </div>
  )
}
