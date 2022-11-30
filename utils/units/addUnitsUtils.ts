export interface AddUnitsInput {
  uid: string;
  propId: string;
  unitName: string;
  unitFloor: number;
  unitStatus: "VACANT" | "BOOKED" | "OCCUPIED";
}
export const addUnitsUtils = ({
  uid,
  propId,
  unitFloor,
  unitName,
  unitStatus
}: AddUnitsInput) => {
  console.log(propId);
};
