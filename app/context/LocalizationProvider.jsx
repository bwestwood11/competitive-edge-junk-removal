'use client'

import { LocalizationProvider } from "@mui/x-date-pickers-pro"
import { AdapterDayjs} from '@mui/x-date-pickers-pro/AdapterDayjs';

export const Providers = ({ children }) => {
    return ( <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en'>
        {children}
        </LocalizationProvider> )
}

export default Providers;