import { useEffect, useState } from "react";

const useThingsToBring = (): [number[] | null, (id: number) => void] => {
  const [thingsIdChecked, setThingsChecked] = useState<number[] | null>(null);

  useEffect(() => {
    const things = localStorage.getItem("thingsToBring");

    if (!things) return;

    const thingsParsed = JSON.parse(things) as number[];

    setThingsChecked(thingsParsed);
  }, []);

  useEffect(() => {
    if (!thingsIdChecked) return;

    localStorage.setItem("thingsToBring", JSON.stringify(thingsIdChecked));
  }, [thingsIdChecked]);

  const toggleId = (id: number) => {
    setThingsChecked(
      thingsIdChecked?.includes(id)
        ? thingsIdChecked?.filter((thingId) => thingId !== id)
        : [...(thingsIdChecked || []), id]
    );
  };

  return [thingsIdChecked, toggleId];
};

export default useThingsToBring;
