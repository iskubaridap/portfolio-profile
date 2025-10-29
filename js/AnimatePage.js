// JavaScript Document

(function ($) {
	$.fn.animatePage = function () {
		var $this = $(this);
		var currentPage = "home";
		var linkName = "home";
		var className;
		var progID = "";
		var over = false;
		var page = "#startPage";
		var sideBarTop = 90;
		var bottomLinks = false;
		var topLinks = true;
		var moveWeb = true;

		function clearPage() {
			$("#background").hide();
			$("#wrapper").hide();

			//Home Page
			$("header").hide();
			$("#headerImageContainer").hide();
			$("#headerImage").hide();

			$("#home").hide();
			$("#homeLink").hide();

			$("#profile").hide();
			$("#profileLink").hide();
			$("#profileArmLink").hide();

			$("#programs").hide();
			$("#programsLink").hide();
			$("#programsArmLink").hide();

			$("#websitesLink").hide();
			$("#websites").hide();
			$("#websitesArmLink").hide();

			$("#artworks").hide();
			$("#artworksLink").hide();
			$("#artworksArmLink").hide();

			// Personal Profile Page
			$("#personalProfilePage").hide();
			$("#linkBG").hide();
			$("#pageTopSpace").hide();
			$("#PPBackground").hide();
			$("#workExperience").hide();
			$("#trainingCourses").hide();
			$("#skillsEduWrapper").hide();
			$("#PPBackground > .aTable, #workExperience > .aTable, #trainingCourses > .aTable, #skillsEduWrapper > .aTable").hide();

			// Programs Page
			$("#programsPage").hide();
			$("#linksTopBG").hide();
			$("#linksBottomBG").hide();

			// Artworks Page
			$("#websitesPage").hide();
			$("#websiteContainer").hide();
			$("#arrows").hide();

			// Artworks Page
			$("#artworksPage").hide();
			$("#sketch").hide();
			$("#digital").hide();
			$("#colored").hide();
			$("#artworkBody").hide();
		}

		function setStyle(page) {
			switch (page) {
				case "profile":
					clearPage();
					$("header").css({
						margin: "0 auto",
						width: 960,
						heigth: 0,
						textAlign: "center",
						position: "relative"
					});
					$("nav").css({
						margin: "0",
						position: "relative",
						textAlign: "left",
						top: 0,
						width: 960
					});
					$("nav a").css({
						padding: "5px 10px",
						backgroundColor: "transparent",
						textTransform: "uppercase",
						color: "#fff",
						fontSize: "1em",
						fontFamily: "Arial",
						fontWeight: "bold",
						borderRadius: "0"
					}).hover(function () {
						$(this).css({
							color: "#0000ff",
							backgroundColor: "transparent"
						})
					}, function () {
						$(this).css({
							color: "#fff",
							backgroundColor: "transparent"
						})
					});
					$("#navWrapper").css({
						margin: "0 auto",
						width: 600,
						textAlign: "left",
						position: "fixed",
						top: 0,
						bottom: "",
						display: "block"
					});
					$("#navWrapper").find(".aTable").each(function () {
						$(this).css({
							margin: "10px 20px",
							display: "inline-table",
							position: "static",
							textAlign: "center",
							width: 0,
							zIndex: 100
						});
						$(this).find(".aTD").css({
							verticalAlign: "middle",
							textAlign: "center"
						});
					});
					$("#navWrapper .aTable:last-child").css({
						marginRight: 0
					});


					// Personal Profile Style
					$("#background").css({
						"background-image": "url()",
						"background-position": "center",
						"background-repeat": "no-repeat",
						"background-attachment": "fixed"
					});
					$("#wrapper").css({
						display: "table",
						width: "100%",
						height: 0,
						margin: "0 auto",
						paddingTop: 0,
						"background-image": "url()",
						"background-position": "center",
						"background-repeat": "no-repeat"
					});

					$("#PPBackground").css({
						width: 0,
						height: 0
					});
					$("#workExperience").css({
						width: 0,
						height: 0
					});
					$("#trainingCourses").css({
						width: 0,
						height: 0
					});
					$("#skillsEduWrapper").css({
						width: 0,
						height: 0
					});

					$("#TCCertIcon img, #TCWrapper #TCCertIcon").css({
						width: 300,
						height: 300
					});

					$("#PPBackground > .aTable, #workExperience > .aTable, #trainingCourses > .aTable, #skillsEduWrapper > .aTable").css({
						height: 0
					});
					$("#PPBackground,#workExperience,#trainingCourses").css({
						marginBottom: 0
					});

					$("#headerImageContainer").css({
						position: "absolute",
						margin: "0",
						left: 'unset',
						right: 0,
						top: 150,
						width: 250,
						height: 250
					});
					$("#headerImageWrapper").css({
						position: "static",
						left: 0,
						width: 250,
						height: 250,
						borderRadius: "5px"
					});

					$("#headerImage").css({
						width: 0,
						height: 0,
						borderRadius: "5px",
						boxShadow: "1px 1px 2px #000",
						opacity: 1,
						padding: 0,
						backgoundColor: "transparent"
					});

					$("#home").css({
						opacity: 1
					});
					$("#homeLink").css({
						top: 0,
						left: 0
					});

					$("#programs").css({
						opacity: 1
					});
					$("#programsLink").css({
						top: 0,
						left: 0
					});

					$("#websites").css({
						opacity: 1
					});
					$("#websitesLink").css({
						top: 0,
						left: 0
					});

					$("#artworks").css({
						opacity: 1
					});
					$("#artworksLink").css({
						top: 0,
						left: 0
					});

					$("#profile").css({
						opacity: 0,
						left: 0
					});
					$("#profileLink").css({
						display: "none"
					});

					break;

				case "programs":
					clearPage();
					$("header").css({
						margin: "0 auto",
						width: 960,
						heigth: 0,
						textAlign: "center",
						position: "relative"
					});
					$("nav").css({
						margin: "0",
						position: "relative",
						textAlign: "left",
						top: 0,
						width: 960
					});
					$("nav a").css({
						padding: "5px 10px",
						backgroundColor: "transparent",
						textTransform: "uppercase",
						color: "#f1f1f1",
						fontSize: "1em",
						fontFamily: "Arial",
						fontWeight: "bold",
						borderRadius: "0"
					}).hover(function () {
						$(this).css({
							color: "#f1f1f1",
							backgroundColor: "transparent"
						})
					}, function () {
						$(this).css({
							color: "#f1f1f1",
							backgroundColor: "transparent"
						})
					});
					$("#navWrapper").css({
						margin: "0 auto",
						width: 960,
						textAlign: "left",
						position: "absolute",
						top: 0,
						bottom: "",
						display: "block"
					});
					$("#navWrapper").find(".aTable").each(function () {
						$(this).css({
							margin: "10px 20px",
							display: "inline-table",
							position: "static",
							textAlign: "center",
							width: 0,
							zIndex: 100
						});
						$(this).find(".aTD").css({
							verticalAlign: "middle",
							textAlign: "center"
						});
					});
					$("#navWrapper .aTable:last-child").css({
						marginRight: 0
					});

					// Programs Page
					$("#background").css({
						"background-image": "url()",
						"background-position": "left bottom",
						"background-repeat": "no-repeat",
						"background-attachment": "fixed"
					});
					$("#wrapper").css({
						display: "table",
						width: "100%",
						height: 0,
						margin: "0 auto",
						paddingTop: 0,
						"background-image": "url()",
						"background-position": "center",
						"background-repeat": "no-repeat"
					});

					$("#progIconWrapper").css({
						opacity: 0
					});
					$("#programsWrapper").css({
						opacity: 0
					});

					$("#progIconWrapper").css({
						top: 90
					});
					$("#progIcon > div").css({
						opacity: 0
					});
					$("#programsWrapper > div").css({
						opacity: 0
					});

					$("#home").css({
						opacity: 1
					});
					$("#homeLink").css({
						top: 0,
						left: 0
					});

					$("#profile").css({
						opacity: 1
					});
					$("#profileLink").css({
						top: 0,
						left: 0
					});

					$("#websites").css({
						opacity: 1
					});
					$("#websitesLink").css({
						top: 0,
						left: 0
					});

					$("#artworks").css({
						opacity: 1
					});
					$("#artworksLink").css({
						top: 0,
						left: 0
					});

					$("#programs").css({
						opacity: 0,
						left: 0
					});
					$("#programsLink").css({
						display: "none"
					});
					break;

				case "websites":
					clearPage();

					$("header").css({
						margin: "0 auto",
						width: 960,
						heigth: 0,
						textAlign: "center",
						position: "static"
					});

					$("nav").css({
						margin: "0 auto",
						position: "relative",
						textAlign: "center",
						top: 50,
						width: 960
					});
					$("nav a").css({
						padding: "0",
						backgroundColor: "transparent",
						textTransform: "uppercase",
						color: "#005e20",
						fontSize: "1em",
						fontFamily: "Arial, Helvetica, sans-serif",
						fontWeight: "bold",
						borderRadius: 0
					}).hover(function () {
						$(this).css({
							color: "#fff",
							backgroundColor: "transparent"
						})
					}, function () {
						$(this).css({
							color: "#005e20",
							backgroundColor: "transparent"
						})
					});
					$("#navWrapper").css({
						margin: "-36px 0 0 80px",
						width: 600,
						textAlign: "left",
						position: "absolute",
						top: 0,
						bottom: "",
						display: "block"
					});
					$("#navWrapper").find(".aTable").each(function () {
						$(this).css({
							margin: "0 60px 0 0",
							display: "inline-table",
							position: "relative",
							textAlign: "center",
							width: 0,
							zIndex: 100
						});
						$(this).find(".aTD").css({
							verticalAlign: "middle",
							textAlign: "center"
						});
					});
					$("#navWrapper .aTable:last-child").css({
						marginRight: 0
					});

					//Websites Page
					$("#background").css({
						"background-image": "",
						"background-position": "top center",
						"background-repeat": "no-repeat",
						"background-attachment": "fixed"
					});
					$("#wrapper").css({
						display: "table-cell",
						width: "100%",
						height: "100%",
						margin: 0,
						padding: 0,
						"background-image": "",
						"background-position": "",
						"background-repeat": ""
					});

					$("#home").css({
						opacity: 1
					});
					$("#homeLink").css({
						top: 45,
						left: 0
					});

					$("#profile").css({
						opacity: 1
					});
					$("#profileLink").css({
						top: 45,
						left: 0
					});

					$("#programs").css({
						opacity: 1
					});
					$("#programsLink").css({
						top: 45,
						left: 0
					});

					$("#artworks").css({
						opacity: 1
					});
					$("#artworksLink").css({
						top: 45,
						left: 0
					});

					$("#websites").css({
						opacity: 0,
						left: 0
					});
					$("#websitesLink").css({
						display: "none"
					});
					break;

				case "artworks":
					clearPage();

					$("header").css({
						margin: "0 auto",
						width: 960,
						heigth: 0,
						textAlign: "center",
						position: "relative"
					});

					$("nav").css({
						margin: "0 auto",
						position: "relative",
						textAlign: "center",
						top: 10,
						width: 960
					});
					$("nav a").css({
						padding: "10px 20px",
						backgroundColor: "transparent",
						textTransform: "none",
						color: "#fff",
						fontSize: "1em",
						fontFamily: "Arial, Helvetica, sans-serif",
						fontWeight: "bold",
						borderRadius: "0"
					}).hover(function () {
						$(this).css({
							color: "#fff",
							backgroundColor: "transparent"
						})
					}, function () {
						$(this).css({
							color: "#fff",
							backgroundColor: "transparent"
						})
					});
					$("#navWrapper").css({
						margin: "0 auto",
						width: 960,
						textAlign: "right",
						position: "absolute",
						top: 0,
						bottom: "",
						display: "block"
					});
					$("#navWrapper").find(".aTable").each(function () {
						$(this).css({
							margin: 0,
							display: "inline-table",
							position: "static",
							textAlign: "center",
							width: 0,
							zIndex: 100
						});
						$(this).find(".aTD").css({
							verticalAlign: "middle",
							textAlign: "center"
						});
					});
					$("#navWrapper .aTable:last-child").css({
						marginRight: 0
					});

					// Artworks Page
					$("#background").css({
						"background-image": "",
						"background-position": "center",
						"background-repeat": "no-repeat",
						"background-attachment": "fixed"
					});
					$("#wrapper").css({
						display: "table-cell",
						width: "100%",
						height: "100%",
						margin: 0,
						padding: 0,
						"background-image": "",
						"background-position": "",
						"background-repeat": ""
					});

					$("#home").css({
						opacity: 1
					});
					$("#homeLink").css({
						top: 0,
						left: 0
					});

					$("#profile").css({
						opacity: 1
					});
					$("#profileLink").css({
						top: 0,
						left: 0
					});

					$("#programs").css({
						opacity: 1
					});
					$("#programsLink").css({
						top: 0,
						left: 0
					});

					$("#websites").css({
						opacity: 1
					});
					$("#websitesLink").css({
						top: 0,
						left: 0
					});

					$("#artworks").css({
						opacity: 0,
						left: 0
					});
					$("#artworksLink").css({
						display: "none"
					});
					break;

				default:
					clearPage();

					$("header").show().css({
						margin: "0 auto",
						width: 960,
						heigth: 500,
						textAlign: "center",
						position: "relative"
					});

					$("nav").css({
						margin: 0,
						position: "relative",
						textAlign: "left",
						top: 0,
						width: 0
					});
					$("nav a").css({
						padding: "15px 30px",
						backgroundColor: "#fff",
						textTransform: "capitalize",
						color: "#320b00",
						fontSize: "1.2em",
						fontFamily: "Times New Roman",
						fontWeight: "bold",
						borderRadius: "5px"
					}).hover(function () {
						$(this).css({
							color: "#320b00",
							backgroundColor: "#fff"
						})
					}, function () {
						$(this).css({
							color: "#320b00",
							backgroundColor: "#fff"
						})
					});
					$("#navWrapper").find(".aTable").each(function () {
						$(this).css({
							margin: 0,
							display: "table",
							position: "absolute",
							textAlign: "center",
							width: 110,
							zIndex: 100
						});
						$(this).find(".aTD").css({
							verticalAlign: "middle",
							textAlign: "center"
						});
					});
					$("#navWrapper").css({
						margin: 0,
						width: "inherit",
						textAlign: "left",
						position: "static",
						top: 0,
						bottom: "",
						display: "block"
					});
					$("#navWrapper .aTable:last-child").css({
						marginRight: 0
					});

					$("#headerImageContainer .aTD").css({
						verticalAlign: "middle"
					});
					$("#headerImageContainer").css({
						position: "relative",
						margin: "0 auto",
						left: 0,
						right: 'unset',
						top: 0,
						width: 800,
						height: 550
					});
					$("#headerImageContainer").find(".aTable").each(function () {
						$(this).css({
							margin: "0 auto",
							width: 800,
							height: 550,
							position: "absolute"
						});
					});
					$("#imageBGWrapper img").css({
						position: "absolute"
					});
					$("#headerImageWrapper").css({
						position: "absolute",
						left: 0,
						top: 20,
						width: 800,
						height: 500,
						borderRadius: 0
					});
					$("#headerImage").css({
						width: 400,
						height: 400,
						borderRadius: "5px",
						boxShadow: "1px 1px 4px #000",
						opacity: 1,
						padding: 20,
						backgroundColor: "#fff"
					});

					// Home Page Style
					$("#background").css({
						"background-image": "url(images/home_background.png)",
						"background-position": "center",
						"background-repeat": "no-repeat",
						"background-attachment": "fixed"
					});
					$("#wrapper").css({
						display: "table-cell",
						width: "100%",
						height: "100%",
						margin: 0,
						padding: 0,
						"background-image": "",
						"background-position": "center",
						"background-repeat": "no-repeat"
					});

					$("header > h2").css({
						opacity: "0",
						display: "block"
					});
					$("header > h3").css({
						opacity: "0",
						display: "inline-block"
					});
					$("blockquote").css({
						opacity: "0",
						display: "block"
					});

					$("#profile").show().css({
						opacity: 1
					});
					$("#profileLink").css({
						left: 425,
						top: 275
					});
					$("#profileArmLink").css({
						left: 45,
						top: 90
					});

					$("#programs").show().css({
						opacity: 1
					});
					$("#programsLink").css({
						left: 425,
						top: 275
					});
					$("#programsArmLink").css({
						left: 60,
						top: 300
					});

					$("#websites").show().css({
						opacity: 1
					});
					$("#websitesLink").css({
						left: 425,
						top: 275
					});
					$("#websitesArmLink").css({
						left: 580,
						top: 480
					});

					$("#artworks").show().css({
						opacity: 1
					});
					$("#artworksLink").css({
						left: 425,
						top: 275
					});
					$("#artworksArmLink").css({
						left: 600,
						top: 130
					});
			}
		}

		function fadeLinks(arms, links) {
			if (arms.length > 0 && links.length > 0) {
				var currentArm = arms.shift();
				var currentLink = links.shift();

				$(currentArm).animate({
					padding: 0,
					opacity: 0
				}, 300, function () {
					$(this).fadeOut();

					$(currentLink).animate({
						padding: 0,
						opacity: 0
					}, 500, "easeInOutBack", function () {
						$(this).fadeOut();

						fadeLinks(arms, links);
					});
				});
			}
		}

		function linksEntrance(linkName, lnLeft, lnTop, armLinkName) {
			$(linkName).delay(800).css({
				opacity: 1
			}).fadeIn(function () {
				$(this).animate({
					left: lnLeft,
					top: lnTop
				}, 1000, "easeOutBack", function () {
					$(armLinkName).fadeIn().animate({
						opacity: 1
					});
				})
			});
		}

		function animateExit(page) {
			switch (page) {
				case "profile":
					$("#headerImage").animate({
						width: 0,
						height: 0,
						top: 0
					}, 800, "easeInOutBack", function () {
						$("#headerImageContainer").hide();
						$(this).hide();
						$("#PPBackground > .aTable").fadeOut(function () {
							$("#PPBackground").animate({
								width: 50
							}, function () {
								$(this).animate({
									height: 0
								}, 800, "easeInOutBack", function () {
									$(this).animate({
										width: 0,
										marginBottom: 0
									});
									$("#workExperience > .aTable").fadeOut(function () {
										$("#workExperience").animate({
											width: 50
										}, function () {
											$(this).animate({
												height: 0
											}, 800, "easeInOutBack", function () {
												$(this).animate({
													width: 0,
													marginBottom: 0
												});
												$("#TCCertIcon img").animate({
													width: 0,
													height: 0
												}, 800, "easeInOutBack", function () {
													$("#trainingCourses > .aTable").fadeOut(function () {
														$("#trainingCourses").animate({
															width: 50
														}, function () {
															$(this).animate({
																height: 0
															}, 800, "easeInOutBack", function () {
																$(this).animate({
																	width: 0,
																	marginBottom: 0
																});
																$("#skillsEduWrapper > .aTable").fadeOut(function () {
																	$("#skillsEduWrapper").animate({
																		width: 50
																	}, function () {
																		$(this).animate({
																			height: 0
																		}, 800, "easeInOutBack", function () {
																			$("#home").fadeOut();
																			$("#programs").fadeOut();
																			$("#websites").fadeOut();
																			$("#artworks").fadeOut(function () {
																				$("#linkBG").fadeOut(function () {
																					$("#background").fadeOut(function () {
																						animateEntrance(linkName);
																						currentPage = linkName;
																					});
																				});
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
					break;

				case "programs":
					$("#progIconWrapper").animate({
						opacity: 0
					});
					$("#programsHead").animate({
						opacity: 0
					});
					$("#programsWrapper").animate({
						opacity: 0
					}, function () {
						$("#home").fadeOut();
						$("#profile").fadeOut();
						$("#websites").fadeOut();
						$("#artworks").fadeOut();
						$("#programsPage").fadeOut(function () {
							$("#background").fadeOut(function () {
								animateEntrance(linkName);
								currentPage = linkName;

								$(page).hide(function () {
									$("#startPage").fadeIn();
									page = "#startPage";
								});
								progID = "";
							});
						});
					});
					break;

				case "websites":
					$("#websiteContainer").fadeOut(function () {
						$("#home").fadeOut();
						$("#profile").fadeOut();
						$("#programs").fadeOut();
						$("#artworks").fadeOut();

						$("#websitesPage").fadeOut();
						$("#arrows").fadeOut(function () {
							$("#background").fadeOut(function () {
								animateEntrance(linkName);
								currentPage = linkName;
							});
						});
					});
					break;

				case "artworks":
					$("#artworkBody").fadeOut(function () {
						$("#colored").fadeOut();
						$("#digital").delay(300).fadeOut();
						$("#sketch").delay(600).fadeOut(function () {
							$("#home").fadeOut();
							$("#profile").fadeOut();
							$("#programs").fadeOut();
							$("#websites").fadeOut(function () {
								$("#artworksPage").fadeOut(function () {
									$("#background").fadeOut(function () {
										animateEntrance(linkName);
										currentPage = linkName;
									});
								});
							});
						});
					});
					break;

				default:
					var aryLinks = [];
					var aryArms = [];

					$("#headerImageContainer ." + linkName).animate({
						padding: 0,
						opacity: 0
					}, 300, function () {
						$(this).fadeOut();

						$("#navWrapper #" + linkName).animate({
							padding: 0,
							opacity: 0
						}, 500, "easeInOutBack", function () {
							$(this).fadeOut();

							$("#home").css("opacity", 0);
							$("#navWrapper").find("a").each(function () {
								if ($(this).css("opacity") > 0) {
									aryLinks.push($(this));
								}
							});
							$("#headerImageContainer").find("img").each(function () {
								if ($(this).css("opacity") > 0) {
									aryArms.push($(this));
								}
							});
							fadeLinks(aryArms, aryLinks);
						});
					});

					$("#headerImage").delay(3100).animate({
						width: 0,
						height: 0,
						padding: 0,
						opacity: 0
					}, 800, "easeInOutBack", function () {
						$(this).hide();
					});
					$("header h2").delay(4000).fadeOut();
					$("header h3").delay(4000).fadeOut();
					$("blockquote").delay(4000).fadeOut(function () {
						$("#background").fadeOut(function () {
							$("#headerImageContainer").css({
								width: 0,
								height: 0
							});
							$("#headerImageContainer").find(".aTable").each(function () {
								$(this).css({
									width: 0,
									height: 0
								});
								$("#headerImageContainer").hide();
							});
							animateEntrance(linkName);
							currentPage = linkName;
						});
					});
			}
		}

		function animateEntrance(page) {
			switch (page) {
				case "profile":
					setStyle(linkName);

					$("body").animate({
						backgroundColor: "#000"
					}, function () {
						$("#background").fadeIn(function () {
							$("#wrapper").show();
							$("#personalProfilePage").show();
							$("#linkBG").fadeIn(function () {
								$("#pageTopSpace").show();
								$("header").show();
								$("#home").fadeIn(function () {
									$("#homeLink").show();
								});
								$("#programs").fadeIn(function () {
									$("#programsLink").show();
								});
								$("#websites").fadeIn(function () {
									$("#websitesLink").show();
								});
								$("#artworks").fadeIn(function () {
									$("#artworksLink").show();
								});
							});
							$("#skillsEduWrapper").delay(300).fadeIn().animate({
								height: 550,
								width: 50
							}, 1000, function () {
								$(this).animate({
									width: "100%"
								}, 500, function () {
									$("#skillsEduWrapper > .aTable").css({
										height: 550
									}).fadeIn(function () {
										$("#trainingCourses").fadeIn().animate({
											height: 1000,
											width: 50
										}, 1000, function () {
											$(this).animate({
												width: "100%"
											}, function () {
												$("#trainingCourses > .aTable").css({
													height: 1000
												}).fadeIn(function () {
													$("#workExperience").fadeIn().animate({
														height: 1400,
														width: 50
													}, 1000, function () {
														$(this).animate({
															width: "100%"
														}, function () {
															$("#workExperience > .aTable").css({
																height: 1400
															}).fadeIn(function () {
																$("#PPBackground").fadeIn().animate({
																	height: 500,
																	width: 50
																}, 1000, function () {
																	$(this).animate({
																		width: "100%"
																	}, function () {
																		$("#PPBackground > .aTable").css({
																			height: 500
																		}).fadeIn(function () {
																			$("#headerImageContainer").show();
																			$("#headerImage").show().animate({
																				width: 250,
																				height: 250
																			}, 800, "easeInOutBack");
																		});
																	}).animate({
																		marginBottom: 20
																	});
																});
															});
														}).animate({
															marginBottom: 20
														});
													});
												});
											}).animate({
												marginBottom: 20
											});
										});
									});
								});
							});
						});
					});
					break;

				case "programs":
					setStyle(linkName);
					$("body").animate({
						backgroundColor: "#f1f1f1"
					}, function () {
						$("#background").fadeIn(function () {
							$("#wrapper").show();
							$("header").show();

							$("#programsPage").fadeIn(function () {
								$("#linksTopBG").fadeIn(function () {
									$("#home").fadeIn();
									$("#profile").fadeIn();
									$("#websites").fadeIn();
									$("#artworks").fadeIn();
									$("#programsHead").fadeIn();
									$("#programsPage > div").animate({
										opacity: 1
									}, function () {
										$("#progIconWrapper").show().animate({
											opacity: 1
										}, function () {
											$("#progIcon > div").animate({
												opacity: 1
											}).show();
										});
										$("#programsWrapper").show().animate({
											opacity: 1
										}, function () {
											$("#programsWrapper > div").animate({
												opacity: 1
											});
											$("#startPage").show();
										});
									});
								});
							});
						});
					});

					$(window).scroll(function (evt) {
						evt.preventDefault();

						var y = $(this).scrollTop();
						if (y > sideBarTop) {
							if (!bottomLinks && topLinks && linkName == "programs") {
								$("#progIconWrapper").animate({
									top: 20
								});
								$("#navWrapper").css({
									top: "",
									bottom: 0,
									position: "fixed",
									display: "none",
									textAlign: "center"
								}).slideDown();
								$("#linksBottomBG").css({
									top: "",
									bottom: 0,
									position: "fixed",
									display: "none"
								}).slideDown();
								bottomLinks = true;
								topLinks = false;
								sideBarTop = 20;
							}
						} else {
							if (bottomLinks && !topLinks && linkName == "programs") {
								$("#progIconWrapper").animate({
									top: 90
								});
								$("#navWrapper").css({
									top: 0,
									bottom: "",
									position: "fixed",
									display: "none",
									textAlign: "left"
								}).slideDown();
								$("#linksBottomBG").fadeOut();
								bottomLinks = false;
								topLinks = true;
								sideBarTop = 90;
							}
						}

					});
					break;

				case "websites":
					setStyle(linkName);
					$("body").animate({
						backgroundColor: "#252525"
					}, function () {
						$("#background").fadeIn(function () {
							$("#wrapper").show();
							$("header").show();

							$("#websitesPage").fadeIn(function () {
								$("#websiteContainer").fadeIn();
							});
							$("#arrows").fadeIn();

							$("#home").fadeIn();
							$("#profile").fadeIn();
							$("#programs").fadeIn();
							$("#artworks").fadeIn();
						});
					});
					break;

				case "artworks":
					setStyle(linkName);

					$("body").animate({
						backgroundColor: "#000"
					}, function () {
						$("#background").fadeIn(function () {
							$("#wrapper").show();
							$("header").show();

							$("#artworksPage").fadeIn(function () {
								$("#home").fadeIn();
								$("#profile").fadeIn();
								$("#programs").fadeIn();
								$("#websites").fadeIn();

								$("#sketch").delay(300).fadeIn();
								$("#digital").delay(600).fadeIn();
								$("#colored").delay(900).fadeIn();
								$("#artworkBody").delay(1200).fadeIn();
							});
						});

					});
					break;

				default:
					setStyle(linkName);

					$("body").animate({
						backgroundColor: "#370000"
					}, 800, function () {
						$("#headerImageContainer").show();
						$("#background").fadeIn(1000, function () {
							$("#wrapper").show();
							$("header").show();

							linksEntrance("#profileLink", 60, 90, "#profileArmLink");
							linksEntrance("#programsLink", 100, 380, "#programsArmLink");
							linksEntrance("#websitesLink", 720, 520, "#websitesArmLink");
							linksEntrance("#artworksLink", 740, 140, "#artworksArmLink");
							$("#headerImage").delay(1800).fadeIn();
							$("header > h2").delay(2500).animate({
								opacity: "1"
							});
							$("header h3").delay(3000).each(function () {
								$(this).animate({
									opacity: "1"
								});
							});
							$("blockquote").delay(3000).animate({
								opacity: "1"
							});
						});

					});
			}
		}

		animateEntrance(currentPage);

		$("nav").find("a").each(function () {
			$(this).unbind().click(function (evt) {
				evt.preventDefault();
				linkName = $(this).attr("id");

				$(page).fadeOut(function () {
					$("#startPage").fadeIn();
					page = "#startPage";
				});
				progID = "";

				animateExit(currentPage);
			});
		});

		$("#clearBtn").unbind().click(function (evt) {
			evt.preventDefault();
			$(page).fadeOut(function () {
				$("#startPage").fadeIn();
				page = "#startPage";
			});
			progID = "";
		});
		$("#progIcon > div").unbind().mousedown(function () {
			progID = $(this).attr("id");
		});
		$("body").not("#programsWrapper").unbind().mouseover(function () {
			progID = "";
		});

		$("#programsWrapper").unbind().hover(
			function () {
				over = true;
				if (progID != "" && over) {
					switch (progID) {
						case "php":
							$(page).fadeOut(function () {
								$("#phpPage").fadeIn();
								page = "#phpPage";
							});
							break;

						case "javascript":
							$(page).fadeOut(function () {
								$("#javascriptPage").fadeIn();
								page = "#javascriptPage";
							});
							break;
						case "java":
							$(page).fadeOut(function () {
								$("#javaPage").fadeIn();
								page = "#javaPage";
							});
							break;

						case "actionScript":
							$(page).fadeOut(function () {
								$("#actionScriptPage").fadeIn();
								page = "#actionScriptPage";
							});
							break;
						default:
							$(page).fadeOut(function () {
								$("#startPage").fadeIn();
								page = "#startPage";
							});
							progID = "";
					}
				}
			},
			function () {
				over = false;
				progID = "";
			}
		);
		//$("#progIconWrapper > div").draggable({revert:true,revertDuration:100,cursor:"move",opacity:1,zIndex: 1});
		// Websiste Page
		$("#web2013").hover(
			function () {
				$("#web2013 .webWriteUpInfo").fadeIn();
			},
			function () {
				$("#web2013 .webWriteUpInfo").fadeOut();
			}
		);
		$("#web2010").hover(
			function () {
				$("#web2010 .webWriteUpInfo").fadeIn();
			},
			function () {
				$("#web2010 .webWriteUpInfo").fadeOut();
			}
		);
		$("#right").unbind().click(function (evt) {
			evt.preventDefault();
			if (moveWeb) {
				$("#webDesign").animate({
					left: -960
				}, 800, "easeOutBack");
				moveWeb = false;
			}
		});
		$("#left").unbind().click(function (evt) {
			evt.preventDefault();
			if (!moveWeb) {
				$("#webDesign").animate({
					left: 0
				}, 800, "easeOutBack");
				moveWeb = true;
			}
		});

		// Artworks Page
		$("#btnSketch").hover(
			function () {
				$(this).attr("src", "images/btn_sketch_hover.jpg");
			},
			function () {
				$(this).attr("src", "images/btn_sketch.jpg");
			}
		);
		$("#btnDigital").hover(
			function () {
				$(this).attr("src", "images/btn_digital_hover.jpg");
			},
			function () {
				$(this).attr("src", "images/btn_digital.jpg");
			}
		);
		$("#btnColored").hover(
			function () {
				$(this).attr("src", "images/btn_colored_hover.jpg");
			},
			function () {
				$(this).attr("src", "images/btn_colored.jpg");
			}
		);
		$("#sketch").hover(
			function () {
				$("#artworkBody img").animate({
					opacity: 0
				}, function () {
					$(this).attr("src", "images/artwork_sketch.jpg").animate({
						opacity: 1
					});
				});
			},
			function () {
				$("#artworkBody img").animate({
					opacity: 0
				}, function () {
					$(this).attr("src", "images/blank.gif").animate({
						opacity: 1
					});
				});
			}
		);
		$("#digital").hover(
			function () {
				$("#artworkBody img").animate({
					opacity: 0
				}, function () {
					$(this).attr("src", "images/artwork_digital.jpg").animate({
						opacity: 1
					});
				});
			},
			function () {
				$("#artworkBody img").animate({
					opacity: 0
				}, function () {
					$(this).attr("src", "images/blank.gif").animate({
						opacity: 1
					});
				});
			}
		);
		$("#colored").hover(
			function () {
				$("#artworkBody img").animate({
					opacity: 0
				}, function () {
					$(this).attr("src", "images/artwork_colored.jpg").animate({
						opacity: 1
					});
				});
			},
			function () {
				$("#artworkBody img").animate({
					opacity: 0
				}, function () {
					$(this).attr("src", "images/blank.gif").animate({
						opacity: 1
					});
				});
			}
		);
	};
})(jQuery);