import axios from 'axios';
const MONTHLY_REST_API_URL = 'http://localhost:1009/api/monthlyYearSeverity';
const YEARLY_REST_API_URL = 'http://localhost:1009/api/yearlySeverity';

class CveService {
   
    getMonthly() {
        return axios.get(MONTHLY_REST_API_URL);
    }

    getYearly() {
        return axios.get(YEARLY_REST_API_URL);
    }
}
export default new CveService();