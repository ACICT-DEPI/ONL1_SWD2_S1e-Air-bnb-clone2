import React, { useState, useEffect } from 'react'
import { SearchIcon } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDebounce } from '../../utils/useDebounce'

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const [inputData, setInputData] = useState(searchParams.get('query') || '')
    const debouncedInput = useDebounce(inputData)
    const [hasInteracted, setHasInteracted] = useState(false)

    const navigate = useNavigate()

    const handleInput = (event) => {
        setInputData(event.target.value)
        if (!hasInteracted) {
            setHasInteracted(true)
        }
    }

    useEffect(() => {
        if (hasInteracted) {
            if (debouncedInput.trim().length > 0) {
                navigate('/search')
                setSearchParams(
                    (prev) => {
                        prev.set('query', debouncedInput)
                        return prev
                    },
                    { replace: true }
                )
            } else {
                navigate('/search')
                setSearchParams(
                    (prev) => {
                        prev.delete('query')
                        return prev
                    },
                    { replace: true }
                )
            }
        }
    }, [debouncedInput, navigate])

    return (
        <div className="sm:flex lg:w-1/4 sm:w-1/2 items-center justify-center lg:justify-start sm:order-2 order-3 lg:order-none w-full mt-2 border-t sm:mt-0 sm:border-t-0 border-[#c8c8c8]">
            <div className="flex border-b sm:pb-2 py-2 border-[#c8c8c8] sm:border-black px-2">
                <input
                    type="text"
                    placeholder="عن ماذا تبحث؟"
                    className="outline-none border-none flex-1 bg-transparent placeholder:text-black text-base sm:order-none order-2 sm:pr-0 pr-2"
                    value={inputData}
                    onChange={handleInput}
                />
                <SearchIcon
                    className="text-slate-500 cursor-pointer"
                    strokeWidth={1}
                />
            </div>
        </div>
    )
}

export default Search
