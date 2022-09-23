export type Data = Record<any, any>

export type Value = string | number | Date

export type Callback = () => Promise<{
  data: {
    success: boolean
    data: Data[]
    errors?: any[]
    loading: boolean
  }
}>
