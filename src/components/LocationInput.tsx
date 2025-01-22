import React from 'react';

interface LocationInputProps {
    text: string;
    placeholder: string;
    isLocation: boolean;
    setIsFocused: (focused: boolean) => void;
    location: string;
    setLocation: (location: string) => void;
}


const LocationInput: React.FC<LocationInputProps> = ({
    text,
    placeholder,
    isLocation,
    setIsFocused,
    location,
    setLocation
}) => {
    return (
        <div
            className={`flex items-center px-4 py-3 flex-1 transition-all hover:bg-gray-200 hover:cursor-pointer`}
        >
            {isLocation ?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M18.9108 18C19.8247 19.368 20.2113 20.203 19.8865 20.8999C19.8466 20.9854 19.7999 21.0679 19.7469 21.1467C19.1724 22 17.6875 22 14.7178 22H9.28223C6.31251 22 4.82765 22 4.25311 21.1467C4.20005 21.0679 4.15339 20.9854 4.11355 20.8999C3.78869 20.203 4.17527 19.368 5.08915 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 9.5C15 11.1569 13.6569 12.5 12 12.5C10.3431 12.5 9 11.1569 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M12 2C16.0588 2 19.5 5.42803 19.5 9.5869C19.5 13.812 16.0028 16.777 12.7725 18.7932C12.5371 18.9287 12.2709 19 12 19C11.7291 19 11.4629 18.9287 11.2275 18.7932C8.00325 16.7573 4.5 13.8266 4.5 9.5869C4.5 5.42803 7.9412 2 12 2Z" stroke="currentColor" stroke-width="1.5" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M2 3.5V20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22 8.5L22 20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2 8.5L6 10.5H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2 15.5H6M22 15.5H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 10.5V16.5C6 18.1547 6.34533 18.5 8 18.5H17C18.6547 18.5 19 18.1547 19 16.5V10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.81362 10.5C6.89385 10.076 7.0202 9.63248 6.99567 9.19713C6.95941 8.5536 6.63697 7.96625 6.1264 7.61368C5.92478 7.47446 5.48 7.33239 5.01268 7.21093C4.3308 7.0337 3.98986 6.94508 3.59142 7.03644C3.30841 7.10133 3.06258 7.25187 2.71115 7.52079C2.67243 7.55042 2.65307 7.56523 2.62289 7.59026C2.3843 7.78812 2.17276 8.07424 2.05352 8.36034C2.03844 8.39653 2.02562 8.43102 2 8.5V8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            }
            <div className="flex flex-col flex-1 pl-4 hover:cursor-pointer">
                <label className="text-xs font-semibold text-gray-500">{text}</label>
                <input
                    type="text"
                    placeholder={placeholder}
                    className={`outline-none text-gray-800 text-sm bg-transparent transition-all hover:bg-gray-200 focus:bg-gray-200 hover:cursor-pointer`}
                    value={location}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
        </div>
    );
};

export default LocationInput;
