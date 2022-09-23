import { useCallback, useEffect, useState } from 'react'

import type * as T from './types'

function useFetch(callback: T.Callback) {
  const [data, setData] = useState<any>(undefined)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(undefined)

  const refetch = useCallback(
    async () => {
      try {
        setLoading(true)
        const { data } = await callback()
        setData(data)
        setLoading(false)
      } catch (error) {
        console.log('catch catch')
        setErrors(error)
      } finally {
        setLoading(false)
      }
    },
    [callback]
  )

  useEffect(() => {
    refetch()
  }, [refetch])

  return {
    data,
    refetch,
    loading,
    errors,
  }
}
export default useFetch
