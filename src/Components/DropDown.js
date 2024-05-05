import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown(props) {
    const { label, selectWidth, values, value, onChange } = props;

  return (
    <div>
        {
            values && <FormControl sx={{ m: 1, minWidth: selectWidth }}>
                                <InputLabel id="demo-simple-select-autowidth-label"  sx={{ fontSize: "15px", marginTop: "-6px", width: "auto"}}>{label}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={value}
                                    onChange={onChange}
                                    autoWidth
                                    label={label}
                                    sx={{ height: 40}} // Adjust padding and font size as needed
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        values.map(val=>{
                                            return(
                                                <MenuItem value={val} key={val}>{val}</MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
        }
    </div>
  );
}
