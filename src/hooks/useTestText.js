import { useState, useEffect } from 'react'
import { words } from '../eng-1000'

const useTestText = () => {
    const [testText, setTestText] = useState([])

    const formatArr = (arr) => {
        const testArr = []
        for (let i = 0; i < arr.length; i++) {
            const strArr = arr[i].split('')
            if (strArr.length > 1 || strArr[0] == "a") {
                testArr.push(strArr)
                testArr.push([])
            }
        }
        return testArr;
    }

    useEffect(() => {
        const testArr = formatArr(words)
        setTestText(testArr)
    }, [])

    return testText
}

export default useTestText
