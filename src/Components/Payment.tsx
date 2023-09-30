"use client";
import React, { useState } from "react";
import { paymentList, Payment } from "@/data/Cars";

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>(
    paymentList[4].name
  );
  return (
    <div className="p-5">
      <h2 className="font-semibold">Payment Method</h2>
      <div className="grid grid-cols-5 gap-5 mt-5">
        {paymentList.map((payment: Payment) => {
          return (
            <div
              key={payment.id}
              className={`flex justify-center items-center border-2 p-2 rounded-md hover:border-yellow-400 cursor-pointer ${
                selectedPayment === payment.name && "border-yellow-400"
              } `}
              onClick={() => setSelectedPayment(payment.name)}
            >
              <img
                src={payment.image}
                alt={payment.name}
                height={30}
                width={30}
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Payment;
