import { TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { TSelectedIcnDetail } from "../Home/AddSkillModal";

const IconSearch: React.FC<{
  selectedIcn: TSelectedIcnDetail;
  setSelectedIcn: (val: TSelectedIcnDetail) => void;
}> = ({ selectedIcn, setSelectedIcn }) => {
  const iconsRef = useRef<IconType[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredIcons, setFilteredIcons] = useState<IconType[]>([]);

  useEffect(() => {
    iconsRef.current = [];
    importIcons();
  }, []);

  useEffect(() => {
    if (searchTerm?.trim()?.length > 1) setLoading(true);
    const delaySearch = setTimeout(() => {
      if (searchTerm?.trim()?.length > 1) {
        setFilteredIcons(
          iconsRef.current.filter((icon: IconType) =>
            icon.name?.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      } else {
        setFilteredIcons([]);
      }
      setSelectedIcn({ icon: null, index: null });
      setLoading(false);
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  const importIcons = () => {
    Promise.all([
      import("react-icons/ai"),
      import("react-icons/bi"),
      import("react-icons/bs"),
      // import("react-icons/cg"),
      // import("react-icons/ci"),
      // import("react-icons/di"),
      // import("react-icons/fa"),
      // import("react-icons/fa6"),
      // import("react-icons/fc"),
      // import("react-icons/fi"),
      // import("react-icons/gi"),
      // import("react-icons/go"),
      // import("react-icons/gr"),
      // import("react-icons/io"),
      // import("react-icons/io5"),
      // import("react-icons/lia"),
      // import("react-icons/lib"),
      // import("react-icons/lu"),
      // import("react-icons/md"),
      // import("react-icons/pi"),
      // import("react-icons/ri"),
      // import("react-icons/rx"),
      // import("react-icons/si"),
      // import("react-icons/sl"),
      // import("react-icons/tb"),
      // import("react-icons/tfi"),
      // import("react-icons/ti"),
      // import("react-icons/vsc"),
      // import("react-icons/wi"),
    ]).then((modules) => {
      iconsRef.current = modules.flatMap((mod) => Object.values(mod));
    });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="icn-search-wrapper">
      <TextField
        variant="outlined"
        label="Icon"
        size="small"
        type="text"
        placeholder="Please enter at least 3 character to search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full mb-4 border rounded-lg focus:outline-none focus:border-blue-500"
      />
      {loading ? (
        <CircularProgress className="c-theme" size={30} />
      ) : (
        <Grid container spacing={2} className="max-h-96 overflow-y-auto mt-1">
          {filteredIcons.map((Icon, index: number) => (
            <Grid item xs={3} key={index}>
              <IconButton onClick={() => setSelectedIcn({ icon: Icon, index })}>
                <Icon
                  className={`icn w-10 h-10 ${
                    index === selectedIcn.index ? "c-theme" : ""
                  }`}
                />
              </IconButton>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default IconSearch;
