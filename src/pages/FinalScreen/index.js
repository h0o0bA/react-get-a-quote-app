import React from "react";
import { useSelector } from "react-redux";

function FinalScreen() {
  const { availablePolicyTypes } = useSelector((state) => state.buisnessUser);
  const listItems = availablePolicyTypes.map((policy) => (
    <li key={policy.toString()}>{policy}</li>
  ));
  return (
    <ul data-testid="final-screen">
      {availablePolicyTypes.length > 0 ? listItems : "No policy yet"}
    </ul>
  );
}

export default FinalScreen;
