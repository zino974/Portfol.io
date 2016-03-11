app

  .factory('leaderBoardFactory', function($http){

    var getMembers = function(leagueID){
      return $http({
        method: 'GET',
        url: '/api/leagues/',
        data: leagueID
      })
      .then(function(members){
        return members;
      });
    };

    return {
      getMembers: getMembers
    };

  })