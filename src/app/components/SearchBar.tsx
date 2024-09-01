"use client";
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi"; // Search icon
import localityData from "../../assets/locality";
import { useSelector, useDispatch } from "react-redux";
import { setLocality } from "../../redux/localitySlice";
import Autosuggest from "react-autosuggest";
import { usePathname, useRouter } from "next/navigation";

type Locality = {
  cityName: string;
  localityName: string;
  localityId: string;
  latitude: number;
  longitude: number;
  device_type: string;
};

const SearchBar: React.FC = () => {
  const [suggestions, setSuggestions] = useState<Locality[]>([]);
  const [value, setValue] = useState<string>("");

  const locality = useSelector((state: any) => state.locality);
  const dispatch = useDispatch();

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    setValue(locality.localityName);
    if (locality?.id && !path.includes("weather")) {
      router.push("/weather");
    }
  }, [locality?.id]);

  const getSuggestions = (inputValue: string) => {
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : localityData.filter((locality) =>
          locality.localityName.toLowerCase().includes(inputValue.toLowerCase())
        );
  };

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (
    event: React.FormEvent<any>,
    { newValue }: { newValue: string }
  ) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: "Search Localities",
    value,
    onChange,
    className:
      "w-full pl-8 p-3 border-2 rounded-full shadow-sm focus:outline-none focus:border-blue-500 relative text-slate-600",
  };

  return (
    <div className="w-full max-w-md">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-50">
          <FiSearch className="" />
        </div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionSelected={(e: any, data: any) => {
            dispatch(
              setLocality({
                id: data.suggestion.localityId,
                localityName: data.suggestion.localityName,
              })
            );
          }}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={(suggestion: Locality) => suggestion.localityName}
          renderSuggestion={(suggestion: Locality) => (
            <div className="p-3 pl-6 text-slate-600 border-b">{suggestion.localityName}</div>
          )}
          renderSuggestionsContainer={({ containerProps, children }:any)=>{
            return <div {...containerProps}><div className="absolute overflow-y-auto z-50 max-h-64 bg-white w-full shadow-md rounded-md">{children}</div></div>
          }}
          inputProps={inputProps}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
          <img src="/MicLogo.png" className="text-gray-500 h-fit" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;


