import { useState, useEffect } from 'react';

export default function useFetch(url, auth = null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //console.log("Lanzando fetch a la API...");
        setLoading(true);
        setError(null);

        const controller = new AbortController();
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: auth? `Bearer ${auth}`: null
            },
            signal: controller.signal
        };

        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch(err) {
                // Ignorar si el error es de abort (no es un error real,
                // sino que es una señal de que el componente se desmontó
                // antes de recibir la respuesta)
                if(err.name === "AbortError") {
                    console.log("Fetch abortado, el componente se desmontó antes de recibir la respuesta.");
                    return;
                }
                console.error("Error al obtener los datos:", err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Opcional: limpiar la llamada fetch si el componente se desmonta antes de recibir la respuesta
        return () => {
            console.log("Limpiando fetch...");
            controller.abort();
        };
    }, [url, auth]);

    return { data, loading, error };
}