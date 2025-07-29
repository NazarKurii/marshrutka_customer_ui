import { useRouter, type Router } from 'vue-router'

interface InvalidParam {
  name: string
  reason: string
}

interface ProblemData {
  type: string
  title: string
  status: number
  detail: string
  invalidParams?: InvalidParam[]
}

export class Problem {
  type: string
  title: string
  status: number
  detail: string
  invalidParams?: InvalidParam[]

  constructor(error: any, router: Router) {
    if (error.response && error.response.data) {
      const data: ProblemData = error.response.data
      if (data.status == 500) {
        router.push({ name: 'internalServerError' })
      }
      this.type = data.type
      this.title = data.title
      this.status = data.status
      this.detail = data.detail
      this.invalidParams = data.invalidParams
    } else {
      // Fallback for unknown error structure
      this.type = 'unknown_error'
      this.title = error.message || 'Unknown Error'
      this.status = error.response?.status || 0
      this.detail = ''
      this.invalidParams = []
      router.push({ name: 'internalServerError' })
    }

    console.log({
      type: this.type,
      title: this.title,
      status: this.status,
      detail: this.detail,
      invalidParams: this.invalidParams,
    })
  }

  notInternal(router: Router, callback: () => void) {}
}
