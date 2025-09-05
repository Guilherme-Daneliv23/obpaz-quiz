
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export interface Player {
    id: string
    full_name: string
    best_score: number
}

export function useRanking()    {
    const [ranking, setRanking] = useState<Player[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchRanking = async () => {
            setLoading(true)

            const { data, error } = await supabase
                .from('profiles')
                .select('id, full_name, best_score')
                .gt('best_score', 0)
                .order('best_score', {ascending: false})
            
            if(error)   {
                console.error('Erro ao buscar ranking: ', error)
                setError('Erro ao carregar ranking')
            } else {
                setRanking(data)
            }

            setLoading(false)
        }

        fetchRanking()
    }, [])

    return {ranking, loading, error}
}