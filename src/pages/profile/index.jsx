import React, { useState } from "react";
import { SiBuymeacoffee } from "react-icons/si";
import InputSet from "../../common/components/inputSet/InputSet";
import { Avatar, Button, Dropdown, Modal } from "rsuite";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import ShareModal from "../../common/components/modals/ShareModal";
const Profile = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = [
    "#FF5733",
    "#0054D2",
    "#7B00F7",
    "#F60002",
    "#00F7F7",
    "#B900F7",
  ];
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="widget">
        <Button onClick={handleOpen}> Open</Button>
        <Modal open={open} onClose={handleClose}>
        {/*   <Modal.Header>
          </Modal.Header> */}
          <Modal.Body>
            <div className="widget_inner">
              <div className="widget_inner-left">
                <div className="header">
                  <h2>Widget</h2>
                  <p>Allow your fans to support directly from your website</p>
                </div>
                <InputSet label={"Description"} placeholder={"description"} />
                <InputSet label={"Widget message"} placeholder={"messagee"} />
                <InputSet
                  label={"Color"}
                  placeholder={"select the color"}
                  label2={"Style your widget to match your brand"}
                />
                <div className="input-set">
                  <div className="label-line">
                    <label>Color</label>
                  </div>
                  <div className="label-line2">
                    <label>Style your widget to match your brand</label>
                  </div>
                  <div className="colors">
                    {colors.map((color, index) => (
                      <span
                        key={index}
                        onClick={() => handleColorClick(color)}
                        style={{
                          backgroundColor: color,
                          borderRadius: "50%",
                          width: "25px",
                          height: "25px",
                          display: "inline-block",
                          margin: "5px",
                          cursor: "pointer",
                          position: "relative",
                        }}
                      >
                        {selectedColor === color && (
                          <FaCheck
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              color: "#fff", // Adjust the color of the check mark
                            }}
                          />
                        )}
                      </span>
                    ))}
                  </div>
                  {/* <div>
                <p>
                  {selectedColor
                    ? `Selected Color: ${selectedColor}`
                    : "Select a color by clicking on a circle"}
                </p>
                {selectedColor && (
                  <div
                    style={{
                      backgroundColor: selectedColor,
                      width: "100px",
                      height: "100px",
                      borderRadius: "10px",
                      margin: "10px",
                      position: "relative",
                    }}
                  >
                    <FaCheckCircle
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "#fff", // Adjust the color of the check mark
                      }}
                    />
                  </div>
                )}
              </div> */}
                </div>
                <div className="position">
                  <label htmlFor="">Position on the website</label>
                  <span>Move the position of your widget</span>
                  <div className="position_inner">
                    <InputSet label={"Align"} />
                    <InputSet label={"Side spacing"} postAddon={"Px"} />
                    <InputSet label={"Bottom spacing"} postAddon={"Px"} />
                  </div>
                </div>
                <div className="button">
                  <Button appearance="primary" className="primary_button">
                    Save
                  </Button>
                  <Button appearance="primary" className="primary_button2">
                    Copy code
                  </Button>
                </div>
              </div>

              <div className="widget_inner-right">
                <div className="widget_inner-right-inner">
                  <div className="header">
                    <h4>
                      Buy <span>Olivia Ysabelle</span> a coffee
                    </h4>
                    <p>
                      Thank you, and feel free to leave a comment with your
                      support
                    </p>
                  </div>
                  <div className="coffee-count">
                    <SiBuymeacoffee /> x
                  </div>
                  <InputSet
                    name={"email"}
                    placeholder={"Your email"}
                    inputClassName={"widget_input"}
                  />
                  <InputSet
                    name={"email"}
                    placeholder={"Your email"}
                    inputClassName={"widget_input"}
                  />
                  <div className="privatemsg">
                    <input type="checkbox" />
                    <span>Private message</span>
                    <span className="que">?</span>
                  </div>
                  <Button appearance="primary" className="primary_button">
                    Support <span>($4)</span>
                  </Button>
                  <div className="recent_coffee">
                    <p>Recent coffees</p>
                    <div className="recent_coffee-avatar">
                      <Avatar
                        size="lg"
                        circle
                        src="https://avatars.githubusercontent.com/u/12592949"
                        alt="@SevenOutman"
                      />
                      <span>
                        Jake Horman <span className="bought">bought</span> 1
                        coffee{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="secured">
                  <SiBuymeacoffee />
                  Secured by Buy Me A Coffee
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi quis iusto vel animi perspiciatis eius iure, amet placeat in? Nisi dolorem autem velit sed. Quasi deleniti tenetur id odit cupiditate eaque tempore dolore cum sapiente excepturi, ratione, error odio. Perferendis esse, autem provident id earum praesentium odio quasi aliquid cumque deleniti illum. Minima saepe earum nihil. Debitis tempore sint sed dicta harum illum voluptates provident esse fuga officiis. Ratione ullam, dolor, rem, delectus provident inventore ipsum dignissimos animi sequi earum iste? Quaerat temporibus quam, excepturi, inventore eum reprehenderit illum impedit numquam assumenda neque delectus aspernatur qui consequuntur totam provident unde distinctio! Magni hic provident accusantium accusamus exercitationem fuga quisquam adipisci, tempore illo sapiente eum? Eveniet quam doloribus nisi. Suscipit exercitationem nulla voluptatem obcaecati dolorem aspernatur maxime fugit, dignissimos error numquam voluptas ducimus praesentium ullam molestiae. Sint iste nesciunt sit, dolorem cum obcaecati eum quos illo sed cupiditate enim beatae nostrum repellat aut totam, magni quidem. Et exercitationem consectetur alias possimus voluptatum quibusdam doloribus, quas numquam obcaecati. Facilis, debitis laboriosam, cupiditate tempora provident similique ratione, dolorum voluptatum incidunt optio quasi! Dignissimos rem, alias ea dolores autem corrupti incidunt itaque aperiam. Numquam quibusdam temporibus rem similique possimus reiciendis quia alias quidem, natus ipsa. Vitae, eum et! Sint libero repellat officiis animi nisi quidem, sequi, ex aspernatur in necessitatibus, amet earum? Aut nam voluptatibus voluptatem, sit deleniti iusto quidem, quisquam commodi, ex neque explicabo culpa fuga? Facilis laborum eius, obcaecati totam, iste maxime similique nostrum, fugit non blanditiis porro voluptas praesentium cumque nam magni libero ut dolor corrupti laboriosam alias numquam ullam. Ipsa asperiores culpa doloremque perferendis earum, aliquid pariatur quibusdam sapiente deleniti debitis reiciendis ut sit ipsam nesciunt voluptas officia aut, distinctio dicta, vitae cupiditate quis accusamus perspiciatis magni? Quidem, expedita ducimus, veniam explicabo quo sunt pariatur placeat, aperiam nisi atque est incidunt voluptates! Distinctio libero quae vel optio delectus impedit molestiae exercitationem provident quisquam voluptatem. Vel nobis laborum laboriosam itaque in a animi dicta, cupiditate aspernatur illum voluptatem tempora fugiat voluptate repudiandae dolorem maiores explicabo, facilis voluptatibus. Esse libero, temporibus commodi voluptate enim ea inventore. Provident aperiam neque nemo, id et quod. Ea, fugiat temporibus? Inventore fugit libero tempore provident similique repellat ab, numquam soluta, aspernatur deserunt sint dolores, odio aliquid non natus eaque quia blanditiis nisi. Exercitationem consectetur maxime pariatur laboriosam facilis, perspiciatis impedit non porro iusto eos ratione, aliquam quo! Odio veniam quos qui vitae, magnam quisquam reprehenderit voluptatem iste voluptatum. Enim, magni tenetur. Quibusdam, eaque iure. Nostrum necessitatibus blanditiis soluta. Quo mollitia ex quaerat? Id harum ad magni nobis repellendus aliquam iure dolor amet sapiente blanditiis accusantium, debitis cumque fuga necessitatibus voluptates excepturi! Ut, ratione iure dicta numquam et unde nemo id distinctio nostrum nihil aspernatur, corrupti exercitationem praesentium velit. Eos non voluptas odit illum nisi, ratione qui voluptatibus eveniet dolore deleniti est perspiciatis veniam aliquam cupiditate voluptate reprehenderit. Provident harum voluptas quibusdam perferendis reprehenderit non rem iusto omnis esse nemo autem, repellendus, impedit sed temporibus iste! Quia, pariatur beatae facere fugiat nemo hic eius rerum accusamus placeat ipsum consequuntur quisquam! Tempora laboriosam ratione, sapiente ipsam repellat explicabo ex soluta, laudantium veniam consequatur, fuga rem ducimus aspernatur sed atque est quibusdam earum dicta doloremque eos? Reprehenderit, quibusdam voluptatum repellendus velit atque soluta ab odio id non ad ut error. Quasi at ad aspernatur doloribus non voluptatum cumque deleniti obcaecati tenetur consectetur. Rerum fuga dicta aperiam molestiae autem eius maiores reprehenderit sunt aliquam pariatur inventore tempora accusantium porro optio rem, quas ducimus omnis excepturi, quidem obcaecati alias itaque neque! Quasi consequatur modi debitis reiciendis accusamus asperiores quaerat reprehenderit ipsam eveniet, omnis sunt nobis nulla dolore, saepe maiores et fugiat. Asperiores omnis eligendi pariatur commodi repellendus earum? Voluptatum consequatur, autem architecto vitae alias illum magnam atque saepe iusto doloribus eius qui dolores dolorem sapiente ullam fugit quam, amet assumenda accusantium mollitia dicta, deserunt debitis beatae recusandae? Repudiandae est, exercitationem voluptas quidem autem maiores dolore aliquam neque reiciendis ex possimus asperiores qui ut. Libero, iusto. Beatae sint suscipit modi doloribus itaque minima debitis voluptatum, ducimus iste sequi sapiente adipisci vel soluta! Obcaecati libero velit sit quam alias amet incidunt facilis expedita beatae consequatur atque autem blanditiis architecto cumque dignissimos praesentium ad, animi doloremque nam pariatur quo minima cum. Quasi rem voluptate aliquid nostrum doloribus repellendus, veritatis vero explicabo expedita praesentium illum est excepturi saepe, asperiores illo quam assumenda dicta similique nobis repellat repudiandae rerum amet dolorum consectetur! Totam et quisquam quibusdam dolorem libero ratione consequuntur inventore cum possimus. Aliquid voluptatibus nulla quasi dolore quo. Beatae perspiciatis molestiae, est consectetur asperiores blanditiis harum doloremque rem, impedit fuga similique corporis quia necessitatibus incidunt nam laboriosam amet omnis minima et atque itaque obcaecati maxime sapiente illum. Rerum necessitatibus vel ipsam. Iste magnam assumenda optio vel dolorum voluptate! Dolorum, velit! Officiis molestiae dolore hic beatae, nostrum fugiat laudantium officia. Commodi qui debitis voluptatum perferendis provident facilis, soluta, vero ratione ab aliquam, fugiat eaque accusamus dolores vitae voluptate? Beatae pariatur iusto dolore quos, magnam itaque qui eligendi officia, vero voluptatibus, quod doloribus laborum nobis impedit unde ratione temporibus minus. Aspernatur deleniti est numquam odio quae facere ab in at. Necessitatibus dolore excepturi temporibus cupiditate qui nostrum modi laborum, adipisci itaque, provident maxime perspiciatis ducimus nobis sed quisquam eveniet ullam explicabo doloremque. Tempora similique, rem aspernatur repellendus repellat magnam obcaecati aliquid laudantium, nisi sequi provident maxime sunt impedit porro? Repellendus veritatis illum enim consequatur, unde vero eos quaerat eligendi. In quae minima, tempora eligendi nam dolores fugiat magni, sequi quaerat veritatis vel natus molestias obcaecati corrupti, ea sapiente dicta eius quas cum quos nisi assumenda eaque minus. Exercitationem, explicabo modi repudiandae voluptatibus voluptate libero? Aliquid dolorum, atque provident perferendis cumque quibusdam corrupti cum veniam, velit quas ipsa assumenda hic debitis saepe ab totam. Voluptates libero veniam qui blanditiis sit ex corporis, ipsum enim molestiae accusamus ratione officiis quam explicabo non deleniti eveniet repellat tempore ab laboriosam. In ad tempora cupiditate possimus distinctio! Vero, error mollitia cum magni consequatur dolorum veritatis illo id accusamus? Voluptate itaque excepturi repellat in iure obcaecati eligendi porro, rem cum magnam corrupti.</span>
        <Button onClick={handleOpen}> Open</Button>

      </div>
    </>
  );
};

export default Profile;
