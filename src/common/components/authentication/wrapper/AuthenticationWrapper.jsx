import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

// components
import ImageRes from "../../imageRes/ImageRes";
import { AiOutlineTwitter } from "react-icons/ai";

const AuthenticationWrapper = ({ children }) => {
  const carouselRef = useRef();

  return (
    <div className="authentication">
      <div className="container">
        <div className="_left">
          <div className="top">
            <div className="logodiv">
              <div className="logo">
                <ImageRes
                  imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAEOCAMAAAAJ/P0UAAAAzFBMVEX////73SkAAAIAAAEAAAD8/Pz4+Pjs7Oz19fXv7+/5+fkZGRrh4eHU1NT73CDl5eVLS0wsLC1eXl8lJSbIyMnb29vAwMA6OjsdHR+Pj5B0dHVVVVadnZ5ra2woKCmxsbJkZGU/P0B9fX6np6j//O7//vh6enu6urqFhYYzMzRMTE0SEhOqqqo8PD0NDQ5XV1j++ND/++f++dr85mv74Dj74kn//fL+9cOWlpf85V397qD86YD+87n98Kj97JX853X964r74UP85WL98rL2o3UtAAAYuklEQVR4nNVdCXuiPBB2NYoXioiKCOLRqqjV3rXXtt39///pIyRgJp6B0O03j89ua5W8DEnmnmQyiSifzxdK9Zbadu3uzHL0njb0Gv2mGVG/73WGWk93JrPN2G2rrXqp6H8p2agJ8BaKJaXeMqbj7mSgeeYKCVDW9LTBpDueGvguCt92E/miUlUN1x4NtAYHOJfLZfkX9wZ3EwuvZ3WXbbWqFFOGXair7WXXmTeyR+Eegc6+ovvI9ufWxjVaSjkl3IrhbiytGY0niaI76Pcm9lRVpOOuT7uOZlJGH2Xz+VwHL3LppmZtplWJk7/Ynq297DnTIz50/CJPs9EbuXU5wKv2upGTOUWOEmX+zJAAfERxC/NbnOvs8q3oajLgygglwR0Peoh+0IoPvNz28KL8R+TPm3EpJvKSvcAMT8Dy2Fynq3Y1i7deS91KsBH+M+h4x7SqMZAXxmbcyZLLAYmPf409aUYxZJQxpMvz7GV1Pp0tHrIoawsLqNIsFJvnIl6ZjSttrTvWaNbtbmzbHmPy/990u7OR5Qz0+dDrV7Ii9+BP+IbwPqM2joqgCLTp9ZzRxtdf1Va1riilUqnoU8GnMiH8I37L/0tJUerVltF2fU1ZZ/TO41NmIog8v8Qs2cf1cLzF0OmO2y0FWw3Cz9T/SrlYb7XHs16feQj7FjnKCs720gRl90L3Mfc1yzbq0nSkkroc9bzKat8UCialLXY9Rd//GHPImyopmDUl1R7pw8Ziz/RBPUHovf1cR2idmj1Trrc3zhVgfDCkKTZjlMGhCWPOXEOtF1MyKIvGrMlYBIRbbbFLzA7II7xM+5ozs/0bqJYKiXD6Zi7eb5auwcj7gtuBQyO0Ebuqe2iHyUa74nxgzTa22zawVXy+WZkvl7BhPl3a3ZHjz+/KwuwMWEVr2kSQ644Q9ExLOwQdbJHZStMLfCy+INrYY9e/EUP1t/hqve7v8pj8H6otVVWN9tRd+uJpNrEGek/rNMwFsy1WnC32YhewDaG52MMtbE6bRVD851YVs9lsNDyvczX0SSOEfxx2Ol7gVqosVpw0DScFsrarB4rDHOoI6mBV/Xwd5gy1Bd7lHiVxtYyGVizwxFFf1NpTNfLczlOUoG4T6I7+HeF/6K8nvoRQL5oy+THQn1BlLAg909a+00ZC3pa3bZOdMb7FIQo9ow6ygl6X3dfZH0TmdsaoQ8B15IhLkXq3g6LV/o3Q6wN2nfkSPIa9kTdmAfjvmDCNrdD0BSIzY3JIi+XYKBkbba8+KpnrCGnMFjhesbsb8sRUgS0Lqq5lxkZ/PnR2LU49AN0U3mJCyherS31x0qBJOF9YuaPOwRaT7caFjqlcn046R4VKbK6TK07Z0RSHlSm+kZdMz8NXNDZ6x1ww0jMJdFYIN6ZwpC4LPYcGUly/hdZ0Y+lap1+B4ZjsedsQ70ao9D1t7dg8tDEUSvG2mL1UVlQcAHOwf6JZEYqBRYiHc93BsTDfbtkdwOiwSkjsLeYgUVNhbGNN1tF78+EV1g999RDqhyi7WlTMfiMIQQ6syazrq8dtA3sTDl263mOdhqiyPPTBxPdQKGIPi2oY7fZ06rrLwHVkb3yyA1/S0nWnU6zKY2dNsXxarpcddjfzDaVvDLNi7wz2IMXx0mDqrliuo1Fcd/U/INdkvcxonSBM8N3U8sAW05S9TlOkosaGJRDqph3OlkgWiKgg8zy249wF7LL9vsSDPWRDhQkNjZP+krwvbbrOutfTre7SaNWPbL6p0hLGsRDq263SMSh5X8NtMLKk0Zts3CBz4ptvoGDxITiEOiP3cA5ByR0stlZRqG2YV/qka7vfkfuBqVyqq0a3uWObYSgda7nfKdOaNHe0wegJmJ6mOyN8C0dFeHwqBP688WZmDXqd1b7oIeZlRXf3aMC+gr8/ssA6iRbNQHGyomSoxC7TyAE5wP68MNiU268y+39pjnaevTo8ZQWxCmt2UWk2vCttvh5gf+N4OTVU1ddQSkdVlHKxqCh1X9uhWluQKtbx+uaCVT+P6s/+3x1OLahq+83Pw4YNO9hqtfC1w2a/4XWGQ23eW+sDB5PlE/5/oOu9nqYR3dKsLHztcrVzmR3b65Ad6wC+K4MDNs9xO0jY37hL4jaWb4MzTza/WXxPwosMygGD0NAOmcqnrM/jr3S+7U+ZyCTE7vhvHTzht1HTDaG35v8u8SUOIWRRtufd1cHV8iO57s926tPeJjP8b6CjTTHc08HzAE6if0yRDASUQzqZMcYCeNH9DzbWjqNvc0ljZDgm5Dqz8Vc62tWCFwCoGbiVmDwM8q1hGBwpqWNLay6YO0gd+hbyqtLQHJvEgwuGDvdAhFwsloozaJE0gf2dr067A81rVrZXTWUWbTFjFa/ndJcqm0lRGCEYkwzM1VIPgdve485WVNeeWfr8qiGaR3Tixc6MbKXf8TXr2cY1qruWQaEHZ7WOlbB6E0D3DvlrCkorVKiHe9Ltz4WOeMVnZTaGvUGgRxvqYXPGANMdeXXyHvskTsX6cH2D0cY6NtZatauGucjyt3GaVpjFGHDXXmLz5bTmX14D3wzC63TJcuz8JA7ialRVw5i6S6x+4+S09Rwr4L5m66u2EZEI/FXgLvWtlC5OJ5i2g2wCX8E/2+LicPq6QH4EHoQZxw+fL2MPCM5mqFarrRZOaODIf7OK0x4UH2yxEMsT2VqBie1rvmUgkJiI90+jUgcAXeczdVaByaFd0++nUFEHXG+WMm125fpb4790eh2l4gRu4mqmy4oY0VSr76TCDAolO6MDLWAhL+Qkm3zorAhETqYDoDd/rhceKyws1GEGBvqaP5frRQvqWo3MCnB9JaE4JSUqriHXKxx0ND19jX9EVRNCX/jQwbqdpVUKl5i6XLig4s91oExWfupkb+8YSpkhNH6Q+SNne9HmjTR/h5lwVg9CA1etK0WBbNd0qVwsVZfajh/a39ene8IB2cYcVwWorbpS+nfhsHKRlBLP1iZvVhNrrt7cccKE9kDF6+GsadGU46SUL4bV2ta6Uzlgg2EdJm/tt5O3dphvmuskjhFYM6k9BRrjcHGMo9cxI9trL7wgTdnIHslJY2y3lekNqUmGS2KSBmN4wL7VO3L0eafP5FgftsiJ9V9yjlj22+cD7ODOcK6TUIwb3IZSFLiPwDSMwjIWjiLxOUEHYkkMdJJgbZjnxwWgOb9aVHAUJjQ7R4HdidNf2m2DoSBPxrdfcXnVBFuwPlZswuK8H3C93LkuHoTsYO0F2e4nuL772mvo53IrTAufKguWgrcPBXCEwxIo9Dlm6k7C0MCOb+U0neHGPDLRO5HcVNffVDwthRDqL7fbnLGOFcGLzbck30aoYbObguqgvZ7cnwcdoasl3M7qtod+/qzBa8oxeKFYNmaN3fXzk7geLO/ecp97rqTaa5PbAH4M9ABVwzrYmKJcarVta1gJ8f/r+RERLnCfz6bVE87VfFlR3a7uCe/D6XEdIXOsnJGWGlKx2rYn66t+BSZRiNyDIFY6ws63/Rkex/9cqKtTe+SstU6Dy5rOSZpPkDGrPRM1ivDGomId9xHqBtk3nb2BjDMaCpHXPqWB5IWvsUptaSuuiA6hmQTP+TbjaTayBuv50GuYC/EM9mBaLEwfrrYeOFFeeFCDW1ZHJg9drvu5THXutm8k4GrMEdZm9d5cG1756myj2YxiMvjHPi6JHGpab607W+UYR2VwUIYzvJQRzM5Bi/T8WkE8JojGkFhMpKYHFGrtJC6DgzKl4vEs9pYGMu7+V+nIEwi98yNdQ/tps0pcZ1JuGeq/CIttVoDrurDTvzoJNIIkrX1i0iwHCh4cQYFUWIZehex3r5K8BctMBGs1CpssvfMcqnzzMikOQHEP6op5fNx+9HWE1t874ZU1hC5W3FNnS4NSLGraS7iNASuRxKo2jQ4oEra+1WOtDkEhm+me/gpDbhNAn8fpBRWb2l6SGjwMnXlmV9+6UP11xg4+FBu87Umpb45H4wrg+lxMmBoagN6UvU4vLy9ubq99ur15vOT/uFmBUlldTCK1euCZLQRbEh2jy4vbt993D/e/aph+3X89v748sTeQ56rxHbFGAvUB6+NGq0Sl2RD253MA+ldE+Jevu5frG4q+OOFqq8VSdEoW/PpMhp1ycfv39eEXi5rFf//8RD6mOIBtomPDlEh/Y0+enHRD+L0PN0X/Qthe1YFEWom1FNqtKk/YzPXy+uXu/hhuDP0vgY77CDBcF+6yslkA6OtEMukxYPhR3JjeyKeNIYDeFxOmUgvib97vvk7CxnRNPt+GhbLCMmXaAGIhvji9+f1wFu5fv+5vyTeAEpJDQ1GucbX8/Xj+hMenj6MrE9ADhc51KhHWn3ztjX1qcdTex9v3c2Z4SLXnm+Br+Q2USMKtbbg2BCtRcfp48/T6dTbDA+h/CPSo1IhqrQPRfbmkc0aWiMbu4/79R4DhBPrHBRl5BKFbgsh3OijMyL1fXuwoSzwFKooYwwn0z8fg+76BxkqknHgHqgnkukVm3MXv32+RsrEX9svr870owwn03+SyLR10oBIWppnMDLpxBmSd3/ypfT3cvb68Xd9ePDKf9vWq67eXz4/nr/N3FB76OxWmWsKWZRl7AZPDiSPp4qMWYLv/eni++3j9/Pzt0+frx92f54f7+1+x2B3SXzKwAZO9TfFtmetbQQXDxWcScEfpniqO7SbgunCPu/AKEXQaE3n8nR50qgdMFwC6J+43hM0JUYU8t8v31KA/EOi4PR8rkYbiOmu9A7iepfrb37SQ156JHlCw2c6CCGnilkKJ6xZC4zlP92lB/0OgbxOLCHRdGHkm34MyiTY6uU4N+gfRAxSQMyrcuzSgAeQ6DQBen6vCCkN/JXpAYNAzXBcXpoE4ZSPG1D9/+5zSOg31gGoPQhcXpnzSdWji3dylBZ0a1a0rWLAmat5hGkOuD8n+evOR1u4Y6gF9yPU45lkbQm9QcfqaEvT7UA9YAejZOJEsNQt9dymL01APmMJ5WonjRakvANdpsdXlSzrIfz0Q6FzbetSIkzlcbELoLpFJ7+kgr1E9oLAByVtoGAN5JgOVT0STC9/SkUmhHsB1IUfrWNB7sAsUFadPX+lAvyPQSw7sBC5smQbkQOhWquI00gPWEHo87zhXpK+TtX6djjiN9IAhHDVeu1gbcl0j0G//pLM7flIPdZ/letzqNFg7EzakTUucvpBB1RWEHs9Nq0LhsEhVnN6/k0ENOCiK5xyvQq5TbeLxMw3kkR4wBXmOaBUvO6GUhdCpdfo7FehfJC4QWKYM9Ea8GFYZRqxDEy8dTSDUA7pQIsUTppnMkOV6DnUJ9L9piNPaM9EDyhY4EgQNYkLXIfQJcfa+faUBnRrVhTWEPooJfcLJJKLEPKUhTmt31LkOJFIulnmHaQO5PqQ+gTTEaeRcb7Jcj2feYXJBuRJu9YApHXH6SoVpFkKPmxHShuJhlaZh/UmG5MRgTGFKrsNwnV7n4iMF5L9+R9xiub6I23q9uoDQqYn3mgLyUA9YQuiNuPF9BTp7EQ1ApqEJhHrAhpNIcbMqikPYdIDuVGloAl/UHzBhStJwNm9s6DqETg+le09BnFKjGvRNwVIwbiVxgZdJ5O00NIEwyM5JJKFoLUvlLuzIQnWhNAzrMMjeZLmeoEgjOLqIgW4SHqRhWN8RNy/Ws1no8Ys0OCcaouL0WT70DypMuQHjZ4YaXM/BMOwrH/orGVBFgOsJ2hupFQidmnh38qF/kgGn4PRBeLSMGFW509Ho1EtBE6D+gDEnkeIfwVLXWK5nw2MvU9AEqB7QZQVJNtYBVZQUHUKnISn54vSeJttZELoVv1qhxDV9ooFA+YZ1GGRfw/Fm8RNDub4O4WGj8iPWX1thyqqqm/gdRbZBbwK9k1bE+oFapg0IfRk/kxgfuck+wH5KEevaM82dgnmhiTp5taEDrEJl0pds6H9ozBR2m1wkKbMwTAB9RU28B8nWae2DDge67ITxznikwvTaLHU7ynZn1KgewM3PYZLqv9YQekxpjEG2T6BGjWob2vG9JOnb1TWETiM7sl3sNSpMZxB6oqPYuHTJ0AUoO3etFglTkDs1SZLvHyWpUq6H4lQ29MgyBaMlOiYJnkKA0JrYSX9lQ6fh3jkczU5S+Ze34SPUaOxUtusuCjyC6ZlAmPrkQiFxRdb8rWTo91QieWBTSNg+YApaVyKPCIkbuchrD2QwowGg95MV/hnQd0ev9ihXiak9Uz7B4FXC9gEGVEPDqlW5mkCoB+CKR4brCY+pbMGW+GEZoVxNoPZJrroB53vEaB8AqDqA0QEqTuVqAjVqVM9gypZo+wCOgmPHGeWfekzlitMa8VDj9gGs6yThUY/4JGYWukNMLrnitEY81MUBhC7YPoAnWCSEyMEKssUp1QOUNZRIcQOPIdkrwHWqhz7JlUnEMsUHCDFcF2wfsEtL6LujG5ZccXpP9AADtAxmDkWKSdPGPjEhVZzWHogekLTikScD9menx3JdyBSntWcC3e2DoQTbB+ySqsHoAJmAlzLFae2ODDWGc1OwfcAuVeGyD8WpzGB7aFSDNkI5pCdtdqHwmy15W2buGjWq87wISVjOjdvkQxFH5IRMcUqN6rB9QCS4k7Ywhq0UUOg3lilOqVGtcCZ8nCINSF142gl1MEgVp0SY4vYBDNdjVDzyZEMlmpYRyhSntBw8bB9AoceoeORpCU0Xuttey0P+64voAQas5hZuH7BLbWjrUhl3K08m1ahzvQ2d6xJa0hhXAHqTiFOJfurQue5CC164fcAu8e2gSFLMhTwTr0aD7GMokbTk7ZeUHueSCt59lCdOayRjLW/DcXpJJRKxXYAjMJAUj/KcvbQcnPcRDiQ01d/bcO5Snjil5eDKhJN9yZFnOGcvOVr0Up44pUZ14A/fjpNNLkwDccqufKLQXUoUp8SobsEohARh6q98WJVP1egnachppFqFJ8MltkwxcR5TauLJi53SSLUBRV+M9gG7ZMAzIZuSoddoxlobxjmbMlrTtaBhTb3et7JMvLAtzBS2Wm3IaDuqdKDvjsQabmSJU5q5nmdTYn3lupNcIvmyQoPQSRmhtHxqWgZW2EDompRjXjh/GomrSStPqv0OVJgS19guXsUjTw7MuyPRzEdZ4pSWgysTmCEXp33ALs0g9IFkcUr0gG37AAJdhjAlkXtWJhFxKq3alxjVVdiFEcnpwuhCrnfItvUmCTktB69CL1vs+hJIXI4pPVtRVhbVF9EDWp192aBJqcVVmxCj8fpLCvJQmKqw1SqS0whbWXDPMpBJksRpWAZmQF/pSoZEymTK0HksVyaFhcntLBikL6mnMVfuTI77fZSUY0q2dT6370oOcixOWaWOZtrKaShA60vKXJa/HGGKrVMAnaZm38qYMWENfpGrrZAjTIP8ZrD6ycZ1+SKB7WE9Ep89LKm5Ls4qZ7mObJJicyshBZ8yPaNAX2nM9gG7xB0tinS6/JPP9rCSKlOFppgkicSXI0YlkJnLxL1iXhjugDmZLLNhS3WO69HjvEwWUgqTSYJqcOjmldWqvgAsXlAin6D2oRbWlvhU9CBzZLi+CM3hUW2MXnf5Eru+6uF9OwAnkCTpjZhG/MGz2jZV5enjS7yLY+3Xw+v19voFeKAwMuWdDwCLrLnzIi7ePp9pM/Xa8Q6a0Wfunz+f2B6c3BnDyEnevDukagXOmChXgNBj0PsTd9J8fnj4ur+/Z3EGN+O/9/Xw8PD858/dx8fny9stC5xL68tGbZdkEFd4ijcZDe68lxc3Nze3t7gH/9PT29vb3/f3F0Lv73/935+ecHN+n/yP8U1n1R58qDICGhFxJZCB6js/Gqa6ZOjExfmjMqOGUXKo5cEZg59q50TKbfmsCVt2h9xRkzICYAztOXgWoZWV/MGqzmJ3C5B7dIp6xUMPzoQb1RMsqHyxrQfH0MGrJk4m4ai4QfyUIScxWu26+Gnc+UKprroTb/e4Pm7vkkItfe/Rrf7gnmW31apSKhbKeUqHIRdL9WrLcLuDTpY9I3F7vVXC7MZ9NPX2n5kbHGTVnzujbnDuc0jT6bTNHQE9dZd2dzTQGll4tiO4WMJs2L1U2FR2p0w4b3aOFsxmV4tKpWI2mw1KTfa0xQPHRaKk2dMHqDTbyyjI/lN0/JzOZOdSHiHF2jvdj7xEPovvPS3kJA9s/5OWQSjVU5kKMyTEeCGWhwlOadHU2781JITuX7Qi4xDTo9Symkj6tMGHDEtUdA9R0R2Y506bs1k+7H7PuWn1pWOe3OfOhY53zM7o+05Nq7uzYfaIaDmXMPDsvGvIs+fOoJLqjrTFKTFzYksJFKCl+q3AMeVLVWM8mjePScu9oCO9YaXN3JaS/urcS/gsYnVqzwaaV0Ei1NSczbSlnDi3/BvIV3O3h0KHBykPrzyv0e+bmHw9zDSbDW84152Z7RrVksCp5QfpP+RKm3NWf04KAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>
              <div className="starting_page">
                <span>Start your page</span>
                <p>Takes less than a minute</p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="watchlist">
              <CarouselProvider
                className="carousel"
                naturalSlideWidth={10}
                naturalSlideHeight={10}
                totalSlides={4}
                visibleSlides={1}
                playDirection="forward"
                interval={5000}
                // isPlaying={true}
                ref={carouselRef}
                infinite
              >
                <Slider className="slider">
                  <Slide className="slide" index={2}>
                    <div className="container_top">
                      <div className="profile">
                        <ImageRes
                          imgSrc="https://th.wallhaven.cc/small/m3/m3zjx1.jpg"
                          alt=""
                        />
                        <div className="profile_data">
                          <span>Teng Jiang</span>
                          <span className="tagline">@Pattrk_linicki</span>
                        </div>
                      </div>

                      <p>
                        This tool is an absolute life saver and has allowd me
                        to do what I love and make money. What could be better?
                      </p>
                      <AiOutlineTwitter className="twitter-icon" />
                    </div>
                  </Slide>
                  <Slide className="slide" index={1}>
                    <div className="profile">
                      <ImageRes
                        imgSrc="https://th.wallhaven.cc/small/m3/m3zjx1.jpg"
                        alt=""
                      />
                      <div className="profile_data">
                        <span>Teng Jiang</span>
                        <span className="tagline">@Pattrk_linicki</span>
                      </div>
                    </div>

                    <p>
                      This tool is an absolute life saver and has allowd me to
                      do what I love and make money. What could be better?
                    </p>
                    <AiOutlineTwitter className="twitter-icon" />
                  </Slide>
                  <Slide className="slide" index={3}>
                    <div className="profile">
                      <ImageRes
                        imgSrc="https://th.wallhaven.cc/small/m3/m3zjx1.jpg"
                        alt=""
                      />
                      <div className="profile_data">
                        <span>Teng Jiang</span>
                        <span className="tagline">@Pattrk_linicki</span>
                      </div>
                    </div>

                    <p>
                      This tool is an absolute life saver and has allowd me to
                      do what I love and make money. What could be better?
                    </p>
                    <AiOutlineTwitter className="twitter-icon" />
                  </Slide>
                  <Slide className="slide" index={4}>
                    <div className="profile">
                      <ImageRes
                        imgSrc="https://th.wallhaven.cc/small/m3/m3zjx1.jpg"
                        alt=""
                      />
                      <div className="profile_data">
                        <span>Teng Jiang</span>
                        <span className="tagline">@Pattrk_linicki</span>
                      </div>
                    </div>

                    <p>
                      Customise and choose the timeframe you want to see the
                      best-performing stocks to make better decisions through
                      the Heatmaps.
                    </p>
                    <AiOutlineTwitter className="twitter-icon" />
                  </Slide>
                </Slider>
              </CarouselProvider>
            </div>
          </div>
        </div>
        <div className="_right">
          <div className="logo">
            {/* <Link href={"/dashboard"}> */}
            {/*  <ImageRes imgSrc={Images.LogoWhite} alt="" /> */}
            {/* </Link> */}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationWrapper;
