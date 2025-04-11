using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CasinoProjektConsole.Models;
using Microsoft.EntityFrameworkCore.Scaffolding.Metadata;

namespace CasinoProjektConsole.Repos
{
    public class PlayerRepo
    {
        DatabaseContext _context = new DatabaseContext();

        public List<Player> GeteligiblePlayers()
        {
            return _context.Players.Where(p => p.Amount > 0).ToList();
        }

        public List<Player> GetPlayersAboveAmount(int minimum)
        {
            return _context.Players.Where(p => p.Amount >= minimum).ToList();
        }

        public int GetAllAmount()
        {
            return _context.Players.Select(p => p.Amount).Sum();
        }

    }
}
