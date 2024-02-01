import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Avatar, Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard_header">
          <div className="dashboard_header-top">
            <div className="dashboard_header-top_avatar_icon">
              <div className="avatar_div">
                <Avatar
                  size="lg"
                  circle
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgECAwQFB//EADwQAAEDAwEFBQUGBQQDAAAAAAEAAgMEBRExBhIhQVETIjJhcRRCgZGxBxUjocHRJFJTYnIzQ7LwJTWi/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAECAwQFBgf/xAAxEQACAgIBAwIFAgYCAwAAAAAAAQIDBBExBRIhE0EiMlFhsRRxBoGRocHRQuEjMzT/2gAMAwEAAhEDEQA/APcUAQBAEAQBAYKipip2700gaPPmte/Jqoj3WS0XhXKx6ijjVd9kOW0rMf3OXm8v+IZP4cdfzf8Ao6FWCuZs5M88tQ7emkc8+ZXncjJuvlu2TZvwrhBfCjGsGy4yUGhwQgo8tYMvcGjzOFeNcpcINoxCspnPDGVEbnHQNeD9FkdE0ttEJpmYE45rBtonQQkDgcjgVPc0Q1vk3aW6VVMR3+0Z0fx/NdXF6xk0f8tr7mtbi12fY7NFeIKjDZPwneehXpsPrWPkLUn2y+5zrcSdfHlHSByM5XY342apcpAQBAEAQBAEAQBAEBRxwMnRQwce4XpsWY6bD3jVx0C891Drkat10eX9fb/s3qMNy8z4ODLLJM8vle57jzcV5K+6y6XdZLbOpCEYLUUWLCXKICqEbNaurqagYX1MoB5N5n0C2sfFsveoIhySIxXbTVM3dpQIWZ8WrivQY/Rq4Lc/LNad2/CONNNNUPLpZJJXH+Z2T8F1YU01rwuDF3MmVltsNspmPl3G1Dxlz3HTyC8vm5NuTNxjwvobUIqK2zbku1BGSH1cII5A5WrHAyJ8RL90UYfv62E49qb8QVd9MyV/xK+rE2ILlRTndjqYnH/JYZ4d0OYllNM2tei1mmnplgoJN6huc1Idx2ZI+YJ+i7GB1a7Fen8Ufoal+LCzyvDJHSVcVXGHxPz1HML2WLl05Ue6pnJsqlW9SNlbZjCAIAgCAIAgCAske1jS5xAA1JVJzjGO5cEpNvSI3dLq6o3oYe7Fpvc3LxvVOsTubrp8R/J1cbEUF3S5OXw5LgM3yqgBAcuruW9XR0FI4GZx/EkOkbf31XSpw/8Awu6zhf3Mblp6Lb3eI7bD2UeH1Dh3QdGjqf2V8Lp8smfc/CKTsSRDaiolqpXSzuc569XVTGqPbFGu5NmJZeEVKtcWOa5pIcDkEKrW1oF808szi6WV73HXedlUhTCPyomT7jGsmiChTY0VYx0jgxjC9x0DRxVJyjBbkyVvhEqs1Bd4cOfUCGL+m/vZ+HL5rz2dlYcvhjHybFcJ8skfHnquA9b8GwFAMlPNJBIJI3lrgeWhC2cfJsx7FOt+THZXGxaZJrZcY6xuD3JRq39l7jpvU68yOuJLlf6ONkY8qn9joLqGuEAQBAEAQFrnANJJ4BVckltjyRm7XI1TzFESIW//AEV4nq3VHkS9Ot6gv7nXxsbsW5cnN9VwmbwUEhCDQvdwbbqJ0n+47uxjqV0On4v6i1L2MdktIhlDWvpKw1ON+TB4nqea9ZbjQsq9L28Gqp6ZrSyPlc6SQl73cXHKzV1xrXbHgq/JaFlICgBQAgCAIDZoq6ehcX0zmtcdSWgla9+NC9amWUmuDpQbUVzD+LHDIPMEfRc+zo1El8O0ZFdL3OvQbSUtQQydpgeepy3PquZkdHtqW4+TJC1Pk7TSHAFpBB0IXIkmnpmbZVVJL45Hxva+M7rm8QVkptnVNTg9NFZQUlpkotVe2siycNlb4mr33TeoRy69vxJcnEyMd1S+xvZC6ZrlUAQBAUKgHBvtwO97NCdPGR9F5brnUtP9PW/3f+DpYePv45HEXlGdJLQUFggCkghe1dV29xMI4sgAbjz1P6D4L1vSKPTp7mvLNS2W3o4y65hCkBAEATRAQkYKgBAEAUg2rbRS3GqbBHgA+J3QdfVamZlRx4d0i8IuRPKCjjooGwROe5o5vOV4zIvd03Jo24rSNha5copDMtNPJTStljPebqORW1i5U8a1WVsx2VqyPayXUlQyphbKzQjTovoeLkwyKlZDhnBsrdcu1mccVsFAgCA0rnVikpXP988GjzXP6jmLEoc/f2/czY9XqzS9iJvcXuLnHJJyfVfPZzc33N+Wd6K0tFAqFgoAQFHHdaXdBlZILckirPOKqQzVMsp1e8le8ogoVxiaD5MSykGWlpp6uYQ0sMksh47rG5Pr6eaEbJLQbC3KfBrJI6cfy53nfko2Uc/odum2BoWD+IqZpDzxwTZVzZvR7GWVgwad7j1MhTuI7mWv2KsrhwhkaeokKjZKkzn1X2f0rmn2aslYejwCE2T3s4Fx2Nu1EwviY2qYNey4uHw/ZSi3emR0gtcWuBa8HBaRgj1CkuUypBKNjQ3cqXY74I+S871tv4UbNBJgvOGwVUAohIUog6VlrOwnETziOTh6Fd3omf6Fvpy+WX5NLMp7o9y5RJ26L3BxyqAodEBFr1UmerLWnuR90fqV4TreX6+Q4p/DHx/P3O1h1dle3yznrim2AhIUAIDWuLiygqXDURnC2sOPddFFJvwedr3a4NA7WzFjkvdYWuJbTQgGR48+Q9UKylo9Rt9vpbdTiCjhZGzngcSepPNRswvbNkaKCAoJCAICoQFMA4yAePNCDk3/AGeorzCe1ZuVA8EzfEPXqFbZKk0eV3WgntldJSVTcSM48NHDqFYzRezo7IymO4ujOkjCMei4vWq+6lS+hsUvT0TJeUNsIAoJCAHkrR5IZLLRVe00bXOOXt7rl9B6Vl/qcZN/MvDOFk1enY0uDeC6ZrmrcKj2ekkk54wOPNaWfkrGxpWf0MtFffYokPPHOdSvnDlvk76WgoJCAKCQgNO8f+rqcf0ytzA/+iJjs4PPl7lcGiei/ZqY/umpwRv+0He9N0Y/VQzDPkl6qVCAIAgCAICqAohGiB/aZDGH0M2B2h3mnHQcVdGWBGNnnFl4pscyR8wtDqUU8aRsVP4ieLxRulEJKqAEAUp6IOnYZzFWdn7sgx8V3ugZPZkOt8S/JpZ1fdX3fQkzdF7Y45wto5e7HCD/AHELzH8R36jGpfudHAh5cjhryR1AoAQBCQgNe4MMlDUMHvRkBbWLPttiyk1tHnI6L3S4ND3JHsRdX2+8MpzxhqiI3DoeRRlJo9SCqYggCAIAgCAIAhGzy3bi5e33qSKP/Spfwx/cfePz4fBWRlgvBzbA0uu9Nu8cOyfktPqPjGlsz1fMT1eIN4IAoJCAIC+J5jka9urSCs+PZ6VkZr2Zjsj3RaJpE4Pja8aOGV9MrkpwUl7nnpLT0Re9ydpcJMHwYH5Lw3W7fUzJL6eDs4ce2pGguMbYUAIAhIQDG9wxnPJXhvfhFH9zz+8UEltuElPI3Hvs82n/AKR8F7rFm5VR3yaL1sk2wuzxnkju1TwiY7MMePGf5j8dFmMM5ex6COCgoEAQBAEAQBAOY5ealFTxu/0U1uu9RBMCC55cwn3wTkFSZ48HS2QoHmV1e5juyZ3WuPNy4vWbZKpQSNilLuJWvLG4FACEhAEAGoUoqyWWWTtLbESclvdPwX0LpFvqYcH9PH9Dh5Ue21kYq3b1ZO7q931Xh8yXfkWS+rf5OxUtQS+yMK1TMVUAIAgCA27cwOlJIzgcF1+kQUrXs1shtJaOF9oNF2sdFUsb3w/sifJ2n5/VeogaafgmNup20lDBTsG62ONrcegWQxPyzYUAINBAEAQBAEBVCNEH+0ij7Y2+SMYkdJ2WfI4/VT7GSBJKajhp6GOkjAEbGYC08iEbIPu+hZNp7RyzwJC8XNaZ01wFQsEAQBACpIO7YqlsVG5rj/uHHyC9Z0PKjVjOMn7v8I5mbU5WJr6HDccvK8rJ7bZ0kvBaqliqgBAEAQGakm7KYE+E8Ct/p+R6Fu3wzDdHujo27pR+30gh6SMe34HK9dXJPg5zOsFlKBAEAQBAEAQBAEBxr/b5K+ptwaB2cM3aSE8sDgPmofBMXoz1U3Yx5OrtFy87JVVbXuzPVDvZyivJnQKIWKqAEAQBAZYpTG0gdVs03OEdGOUE2YyFgcdPRZMoqlggCAIAgCkg2qarMA3TxaD8l08TqM6PD8o17Ke87UMglja9vEOGV6mi6NsFKPuc+ce2Wi9ZSAgCAIAgCAIAgNCtrWxPMYblwC5Od1GNMu1eWbFVLktnJkkfI7efxPTovN3XStl3SN6EVFaRasBcKCQgCAIAgMkcZeMjqs1dTmtlJSSZWqbuVUzf5XuH5rJlw7MiyP0b/JWp7gn+xiWqZQgCAIAgCEBSkRs3LFc4Jp5qGOQOljG9jy8vRev6VTdXRufBzL5xc/B210jEEAQBAEAQBAY6iZlPBJPMcRxtLnegVorfgiT0iA2/aI11S8VYDHSPPZuHTkCuN1bo8k/Wre/qZsTLTfZI7fLivKtHUCgBCQgCAIApIO1ZaVs9K95/qEfkF6fouHG7Hcn9f8I52Za4WJL6GneY+zuEmPf7y53Wq1XmT17+f6mfDlupGiuQbYQBAEAQBSQcTaO6GlZ7LAcTPGXOGrAvR9D6b60vWnwjn5mR2LticC1V8luuEVWz3DxA1I5hezlBOHYvCOSptPZ65S1EdVTRzwO3o5G7zSFzJR7Xo3E9rZlVSQgCAIAgCAhv2gXbs4WWyF3el702OTeQW3jVbfczXun40iCD8hoFutdy0+DXTfKJfs9cDWU3ZSuJmiAaSdXDkV4PrWB+nu748M7mFd316fKOuuEbwUAIAgCAforRIZKrHF2duj4cXZd817/o1XZhw+/k4eXLdrOftJEd6KUDhoSuT/EdHyWr9ja6fPmLOKvKHTCAIAgCAo924xzjoBkrLVHvmolJvS2QCsndV1Mkzxxe7OfovpuLQqaYwR5y2TnNsw4WwYiWbE35tJL93Vj8QSOxC8+448vQ/Va99W1sz1T14PQQcrnm0EAQBAEBiqJ2wM3ieOOA6oQeP3KV81wnlleXvdIcuK61SSijRm25GuNFcqb1mqjS3GF4J3XO3HD1XM6rjq7HktcGxiz7bVsnC+cNHothQSEAQBAVY0vka1o1OFlqrdk1Be5ST0myawMEcLGAYDQAvptUFCCiuEeelLubZrXWnNRRSMHiAyPVafUsf18aUPcy49nZYmRLkvnbWjvbCqSEAQBAat0Jbbakt13Dhb/To92TBGvkf+tkDGi+lrg89oKSpsUJxX0/HAMrPqFSz5GWi/J6y2pMUpjl8Oe65cdM6Gjbad4ZGMcsFWIK/NAEBgnqo4Wkk5d0VWwcqWZ0zi5xzx06BSvI9jzOrINVMRpvu+q69fyo0HyY1cqMkOBacEcQqW/JL9iVyj0OM5Y30C+XXxStaR6av5UXLAZAgCAKSGdGxQdtWB5Hdj4n15Lt9BxvUyu98R/Jp5tnbXr6kobovco4wI4KQRK7Uvs1Y4Adx/eavn/V8R42Q0uH5R3MW31K19jTXJNoIAgCkgw1rO0pJ2c3MIW3hT9O+MvuYr4uUGkef4I4HII6r6bF7imecfOgrFS6N25Kx490gqs1tNErnZ6zG8VtNHKOLZGhwPRcaS7Xo6Saa8GAump3cCQOSjYZkbcZhyYfgp2V0WSVk7xjeAHkE2Ska5yTlVJNa51ApbfPUH3GHHroB8yslabl4KzaSPO85OfmuxHg55VSQX00L56mOJur3Bo9Oq1su2NVEpS8eDLTFzmkj0Frd1oHQYXzGcu6TZ6OK0tFVjLhAEAOmitEhkpslL7NRDe8b+8V77o+J+nxk5cy8s4eXb6ln2R0V1jWB0QHOu9H7VTHdH4jOLVyurYX6qj4fmXBs4t3p2eeCLaHB1XgHHXg7aaa2gqlh6KdEM1a2vgoY9+d/HkwalbuJgW5UtQRhtvhWttkZr79U1WWQnsYug1PqvY4XQqKNSsW2ci7NnPwjkruaS8I0ggCAm2w91EkJt0rsSM4xZPiHMLnZdTXxI26J+zJa4Bww7B8lomya8lK12nAqRosNGeTggDaPj3nfAKPL4IIdtncY3uFvpjljHb0rgdXch8F0cart8s1b578Ii4+PxW8axVCTLTVEtNOyaF269uhwsN9Ecitwnwy8JuD2iT2y/xVJbHU7sUp0OeDl43qPQ50fHX5R1qM5SfbPwdrlnIx5LzzWvBvp7CqWClEM37RRmqqQXA7jOJ812Oj4P6m/bXiPlmpl3enDXuyVN0XvdHFKoAgLSBhQCPXyh7J/tMQO47xgcj1XkOudO7J+vWvD5/c6mHftdkjj8V5vR0Tk3q8NoR2UOHTkfBvmu50rpLyX3WL4TRyctV+EROWaSaQyTPc551Ljle2pprqiowWkcWc3N7ZZos2ioUklA4EuHMaoQVCAvilkhkZLE8skYd5rhyKhpNaZKbXlHoOzm0UNxjbT1BbHVtGmgf5g/ouXfjuD2jcqu7lpkgJ6rWM5a5zGNLnENAGSSU1vwG9EQ2i2qbh9Na3g5BDpun+K3qcR8yNay7xpELIO9kkk9SVvpaWjU55KjzKkFrHh5du8QFALlJJXyUa3yDtWW8upi2CrcXQk4DubF53q3R4WRdtXJ0MXLcZalwSoHeAIIIOmOa8VKPa9Pk7Caa2jJDE+aRscYy5xwFkppndYoVrbZWc1BbZLaCkZSU7Y28T7x6lfQ8HDjiUqtfzOFda7ZbZtLcMQQBAEBZLG17C17QQeBCpOEZxcZcMlNp7RDdo4jZoJakguhA/Dx15Arx93RbIZSjH5H7/AODqwy4yqbfJ5tJJJLI6WU5keSXFezoqjTBQhwjjzm5ycmWrKUCAIDBUMeD2sX+o0adR0QFaeoZKMDuv5tPJAdClt9XVxTS0tO+WOEZe4clDJSNZhOQ5pxxyDzCaTCZI7XthV0sZiq4vagBhjid0j1PNatuLGb2jPG/S0c66X2uuZIqJOziJ4RM4NH7rJVRGvyY5WORq0dvrKzfNHTumEQy4j3R/0LMUNY4GeWNc8lINN8z6l/ZwcIx439fRCDaYA1gaBgDQIC5AEA4INkr2VrHVMRpHEulj8Hm3ovF9dwOy1TrXzHYwsjcO2XsehWi3NpWCSUZmcOP9vkut0npixY98/mf9vsa+Vkeo+1cHTXZNQIAgCAIAgNeuo4K6lkpqqISRSDDmkIDyfajZapskpljJloie5INWeTv3VkyrRH+OOP1VigUgKCQpINWqpTId+M7kn1QE7+zt833HcvaG4LXHHpuqsi0SDwVMUrG7sjS7odQrFfczBw6qCQXtaCXPA9VIJl9nUrJKe6dk8OLQ3OPQqrJSIHJHPUyv9oPZRlxwwanirEGy2NkbQ1gw0ckILkAQBAZKanlq5mQUzC+VxwGjmjJ1s9R2N2VbZmCprCJK1w5eGMdB19ViklJp/QuvBK0JCAIAgCAIAgCAxzxMnjdFKwPjcCHNcMgoDz7aTYR8e/U2XLmammOo/wAT+itsq0QaRro3lkjXMc04LXjBHqFZFdaLVICEBATfYYZstxB0JP8AxVZFonnf3fCQ0s3mkgaKUQy37t6TOCkgq23Mz3nucPXCA9A+ziJkNPcRG3A7v0KrIsiHyeN3qVJDLVJAQDRAdSxWCvvUoFJHiLPfmd4Wj9/JVbLaPUdndm6Oxx/hN7SocO/M4cT6dAqNlktHbQkIAgCAIAgCAIAgCAoUByb1s7bry3+LhHagcJWcHD90T0CA3jYW5URc+i/jIdcN4PA9OaspFWiLSRvjeWSxvje3Vr2kEfNW2V0WqQTjYUf+GuHqf+KpImJBWeBvoFcguQgYQE0+z3hT3HPRv0KpIsiHScJHjnkqyKlnLKkHQtdjuN1OKKlke3PGQjdYPiVVsnTJzZNgKaDdlur+3eOPZN4NH7quyyRMoYY4YmRRRtjjbwDWjACgsZUAQBAEAQBAf//Z"
                  alt="@SevenOutman"
                />
              </div>
              <div>
                <p>
                  <b>Juile Peter</b> is creating animation & <br></br>{" "}
                  illustarations
                </p>
                <span>2.1k supporters</span>
              </div>
            </div>
            <div className="dashboard_header-top_followsupport">
              <a>Follow</a>
              <a>Support</a>
            </div>
          </div>
          <div className="dashboard_header-bottom">
            <div className="dashboard_header-bottom_dashboard_routes">
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>

              <NavLink to="/posts">
                {" "}
                Posts <span>10</span>{" "}
              </NavLink>
              <NavLink to="/extras">
                {" "}
                Extras <span>20</span>
              </NavLink>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
