export class WebService{
    static authCheck(){       
        const token = localStorage.getItem('token');
        return token && Date.parse(localStorage.getItem('expire')) > Date.now();
    }
}