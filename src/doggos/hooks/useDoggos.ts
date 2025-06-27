import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchDoggos = () => {
    const [doggos, setDoggos] = useState<string[]>([])
    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const doggoResponse = await axios.get('https://dog.ceo/api/breed/hound/images')
                setDoggos(doggoResponse.data.message.slice(0, 10)) // Limit to first 10 images
            } catch (error) {
                console.error('Error fetching doggos:', error);
                throw error;

            }
        }

        fetchDogs()

    }, [])

    return { doggos }
}