import { setAuth } from "../reducers/repoReducers/accountReducer";

export class WebService{
    static authCheck(){       
        const token = localStorage.getItem('token');
        return token && Date.parse(localStorage.getItem('expire')) > Date.now();
    }

    static login(dispatch, navigator, res){
        localStorage.setItem('token', res.data.accessToken);
        localStorage.setItem('expire', res.data.expire);
        dispatch(setAuth(true));
        navigator("/");
    }

    static logout(dispatch, navigator){
        localStorage.removeItem('token');
        localStorage.removeItem('expire');
        dispatch(setAuth(false));
        navigator("/")
    }    

    static getSearchRequest(data){
        return {
            issueDateInterval: {
              startDate: data.dateStart,
              endDate: data.dateEnd
            },
            searchContext: {
              targetSearchEntitiesContext: {
                targetSearchEntities: [
                  {
                    type: "company",
                    sparkId: null,
                    entityId: null,
                    inn: data.inn,
                    maxFullness: data.maxFullness,
                    inBusinessNews: data.inBusinessNews
                  }
                ],
                onlyMainRole: data.onlyMainRole,
                tonality: data.tonality,
                onlyWithRiskFactors: data.onlyWithRiskFactors
              }
            },
            attributeFilters: {
              excludeTechNews: data.excludeTechNews,
              excludeAnnouncements: data.excludeAnnouncements,
              excludeDigests: data.excludeDigests
            },
            similarMode: "duplicates",
            limit: data.countDoc,
            sortType: "sourceInfluence",
            sortDirectionType: "desc",
            intervalType: "month",
            histogramTypes: [
              "totalDocuments",
              "riskFactors"
            ]
          }
    }
}