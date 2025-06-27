import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useFetchDoggos = () => {
    const [doggos, setDoggos] = useState<string[]>([])
    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const doggoResponse = await axios.get('https://dog.ceo/api/breed/hound/images')
                setDoggos(doggoResponse.data.message.slice(0, 20)) // Limit to first 20 images
            } catch (error) {
                console.error('Error fetching doggos:', error);
                throw error;

            }
        }

        fetchDogs()

    }, [])

    return { doggos }
}

export const useDoDoggoStuff = () => {
    const bark = useCallback((index: number) => {
        alert(`Woof! I am dog number ${index + 1}`)
    }, [])

    return { bark }
}