
export let getShows = (ResFnc: (ResVar: any) => any) =>
{
    fetch("https://api.tvmaze.com/shows?page=1")
        .then(ResRsgVar => ResRsgVar.json())
        .then(JsnRsgVar =>
        {
            if (JsnRsgVar)
                ResFnc(JsnRsgVar)
            //CodTdo;
        })
        .catch(ErrRsgVar => 
        {
            alert("ErrRsgVar : " + ErrRsgVar)
        })
}


export let searchByShow = (searchTxt: String, ResFnc: (ResVar: any) => any) =>
{
    fetch("https://api.tvmaze.com/search/shows?q=" + searchTxt)
        .then(ResRsgVar => ResRsgVar.json())
        .then(JsnRsgVar =>
        {
            if (JsnRsgVar)
                ResFnc(JsnRsgVar)
            //CodTdo;
        })
        .catch(ErrRsgVar => 
        {
            alert("ErrRsgVar : " + ErrRsgVar)
        })
}

export let searchByPeople = (searchTxt: String, ResFnc: (ResVar: any) => any) =>
{
    fetch("https://api.tvmaze.com/search/people?q=" + searchTxt)
        .then(ResRsgVar => ResRsgVar.json())
        .then(JsnRsgVar =>
        {
            if (JsnRsgVar)
                ResFnc(JsnRsgVar)
            //CodTdo;
        })
        .catch(ErrRsgVar => 
        {
            alert("ErrRsgVar : " + ErrRsgVar)
        })
}