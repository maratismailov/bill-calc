import Check from "../containers/Checks/Check/Check";

const initialState = {
  checks: [],
  checkId: 0,
  initChecks: [],
  memberId: 0,
  dishId: 0,
  oldCheckIndex: 0,
  checkTotalSum: 0,
  checkCollectiveDivided: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OLD_CHECK":
      return {
        ...state,
        oldCheckIndex: action.oldCheckIndex
      };

    case "ADD_CHECK":
      state.checkTotalSum = 0;
      // const remappedChecks = JSON.parse(JSON.stringify(state.checks));

      const remappedChecks = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {
          return {
            ...check,
            members: [...check.members],
            collectiveDishes: [...check.collectiveDishes],
            collectiveDisheId: 0
          };
        }
        return check;
      });
      remappedChecks.push({
        date: new Date().toLocaleString('ru-RU'),
        id: state.checkId,
        serviceCharge: '',
        checkTotalSum: 0,
        collectiveDisheId: 0,
        members: action.check,
        // collectiveDishes: action.collectiveDishes,
        collectiveDishes: [
          // {

          // }
        ],
        collectiveDishesSum: 0,
        collectiveMembers: 0

      });
      return {
        ...state,
        checks: remappedChecks,
        checkId: state.checkId + 1,
        memberId: 1,
        dishId: 1
        // memberId: state.memberId +1
      };

    case "ADD_MEMBER":
      const remappedMembers = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {
          if (state.checks[checkIndex].collectiveDishes.length === 0) {
            return {
              ...check,
              members: [
                ...check.members,
                {
                  dishes: [
                    {
                      dish: action.member,
                      price: ''
                    },
                  ],
                  memberId: state.memberId,
                  memberName: '',
                  memberSum: 0,
                }
              ]
            };
          }
          else {
            const remappedCollectiveDishes = check.collectiveDishes.map((dish, index) => {
              return {
                ...dish,
                members: [
                  ...dish.members,
                  {
                    checked: true
                  }
                ]
              }
            })
            return {
              ...check,
              members: [
                ...check.members,
                {
                  dishes: [
                    {
                      dish: action.member,
                      price: ''
                    },
                  ],
                  memberId: state.memberId,
                  memberName: '',
                  memberSum: 0,
                }
              ],

              collectiveDishes: remappedCollectiveDishes
            };
          }
        }
        return check;
      });

      return {
        ...state,
        memberId: state.memberId + 1,
        checks: remappedMembers,
        // dishId:1
      };

    case "ADD_COLLECTIVE":
      const remappedCollective = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {
          // const remappedCollectiveInternal = check.check.map((member, memberIndex) => {
          //   return {
          //   }
          // });
          return {
            ...check,
            collectiveDishes: [
              ...check.collectiveDishes,
              {
                sumPerMember: 0,
                collectiveDishName: '',
                collectiveDishPrice: '',
                members: check.members.map((checked) => {
                  checked = true
                  return {
                    checked
                  }
                }
                )
              },
            ],
            collectiveDisheId: check.collectiveDisheId + 1,
            // members: remappedCollectiveInternal
          };
        }
        return check;
      });

      return {
        ...state,
        // collectiveDisheId: state.collectiveDisheId+1,
        checks: remappedCollective,
        // dishId:1
      };

    // case "COLLECTIVE_CHECKED":
    // if (action.collectiveChecked) {
    //   return {
    //     ...state,
    //     collectiveChecked: false
    //   }
    // }
    // else {
    //   return {
    //     ...state,
    //     collectiveChecked: true
    //   }
    // }

    case 'COLLECTIVE_CHECKED':
      const remappedCollectiveChecked = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          const remappedCollectiveCheckedInternal = check.collectiveDishes.map((dish, dishIndex) => {
            if (dishIndex === action.dishIndex) {
              const remappedCollectiveMembersInternal = dish.members.map((member, memberIndex) => {
                if (memberIndex === action.memberId) {
                  if (action.collectiveChecked) {
                    return {
                      ...member,
                      checked: false
                    }
                  }
                  else {
                    return {
                      ...member,
                      checked: true
                    }
                  }
                }
                return member
              })
              return {
                ...dish,
                members: remappedCollectiveMembersInternal
              };
            }
            return dish;
          });
          return {
            ...check,
            collectiveDishes: remappedCollectiveCheckedInternal
          }
        }
        return check
      });

      return {
        ...state,
        // dishId: state.dishId + 1,
        checks: remappedCollectiveChecked
      };

    // case 'COLLECTIVE_CHECKED':
    // const remappedCollectiveChecked = state.checks.map((check, checkIndex) => {
    //   if (checkIndex === state.checkId - 1) {

    //     const remappedCollectiveCheckedInternal = check.members.map((member, memberIndex) => {
    //       if (memberIndex === action.memberId) {
    //         if (action.collectiveChecked) {
    //           return {
    //             ...member,
    //             collectiveChecked: false
    //           }
    //         }
    //         else {
    //           return {
    //             ...member,
    //             collectiveChecked: true
    //           }
    //         }
    //       }
    //       return member;
    //     });

    //     return {
    //       ...check,
    //       members: remappedCollectiveCheckedInternal
    //     };
    //   }
    //   return check;
    // });

    // return {
    //   ...state,
    //   // dishId: state.dishId + 1,
    //   checks: remappedCollectiveChecked
    // };


    case 'ADD_COLLECTIVE_NAME':
      const remappedCollectiveNames = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          const remappedCollectiveNamesInternal = check.collectiveDishes.map((dish, index) => {
            if (index === action.dishId) {
              return {
                ...dish,
                collectiveDishName: action.dishName
              }
            }
            return dish;
          });

          return {
            ...check,
            collectiveDishes: remappedCollectiveNamesInternal
          };
        }
        return check;
      });

      return {
        ...state,
        // dishId: state.dishId + 1,
        checks: remappedCollectiveNames
      };

    case 'ADD_COLLECTIVE_PRICE':
      const remappedCollectivePrices = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {



          const remappedCollectivePricesInternal = check.collectiveDishes.map((dish, index) => {
            if (index === action.dishId) {
              return {
                ...dish,
                collectiveDishPrice: action.dishPrice
              }
            }
            return dish;
          });

          return {
            ...check,
            collectiveDishes: remappedCollectivePricesInternal
          };
        }
        return check;
      });

      return {
        ...state,
        // dishId: state.dishId + 1,
        checks: remappedCollectivePrices
      };

    case 'ADD_DISH':
      const remappedDishes = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          const remappedDishesInternal = check.members.map((member, memberIndex) => {
            if (memberIndex === action.memberId) {
              return {
                ...member,
                dishes: [
                  ...member.dishes,
                  {
                    dish: action.dish,
                    price: ''
                  }
                ]
              }
            }
            return member;
          });

          return {
            ...check,
            members: remappedDishesInternal
          };
        }
        return check;
      });

      return {
        ...state,
        dishId: state.dishId + 1,
        checks: remappedDishes
      };



    case 'ADD_DISH_NAME':
      const remappedDishesNames = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          const remappedDishesNamesMembers = check.members.map((member, memberIndex) => {
            if (memberIndex === action.memberId) {
              // console.log(action.dishName)
              // console.log(action.dishId)
              const remappedDishesNamesInternal = member.dishes.map((dish, dishIndex) => {
                if (dishIndex === action.dishId) {
                  return {

                    ...dish,
                    dish: action.dishName

                  }
                }
                return dish

              })
              return {
                ...member,
                dishes: remappedDishesNamesInternal
              }
            }
            return member
          });

          return {
            ...check,
            members: remappedDishesNamesMembers
          };
        }
        return check;
      });

      return {
        ...state,
        dishId: state.dishId + 1,
        checks: remappedDishesNames
      };

    case 'ADD_DISH_PRICE':
      const remappedDishesPrices = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          const remappedDishesPricesMembers = check.members.map((member, memberIndex) => {
            if (memberIndex === action.memberId) {
              // console.log(action.dishName)
              // console.log(action.dishId)
              const remappedDishesPricesInternal = member.dishes.map((dish, dishIndex) => {
                if (dishIndex === action.dishId) {
                  console.log(action.dishId);
                  console.log(action.memberId)
                  return {

                    ...dish,
                    price: Number(action.dishPrice)

                  }
                }
                return dish

              })
              return {
                ...member,
                dishes: remappedDishesPricesInternal
              }
            }
            return member
          });

          return {
            ...check,
            members: remappedDishesPricesMembers
          };
        }
        return check;
      });

      return {
        ...state,
        dishId: state.dishId + 1,
        checks: remappedDishesPrices
      };

    case 'ADD_MEMBER_NAME':
      const remappedMemberNames = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          const remappedMemberNamesInternal = check.members.map((member, memberIndex) => {
            if (memberIndex === action.memberId) {
              return {
                ...member,
                memberName: action.memberName
              }
            }
            return member;
          });

          return {
            ...check,
            members: remappedMemberNamesInternal
          };
        }
        return check;
      });

      return {
        ...state,
        dishId: state.dishId + 1,
        checks: remappedMemberNames
      };

    case 'CALCULATE':
      const remappedCalculate = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {
          const remappedCollectiveMembers = check.collectiveDishes.map((dish, index) => {
            let collectiveMembers = 0;
            const remappedTrueMembers = dish.members.map((member, index) => {
              if (member.checked === true) {
                return (
                  member = 1
                )
              }
              else {
                return (
                  member = 0
                )
              }
            })
            const trueMembers = remappedTrueMembers.filter(member => member === 1);
            const collectiveMembersNumber = trueMembers.length
            dish.sumPerMember = dish.collectiveDishPrice / collectiveMembersNumber;
            return collectiveMembers
          })
          const dishCollectiveSum = ((check.serviceCharge / 100) + 1) * check.collectiveDishes.reduce((prev, cur) => {
            return prev + cur.collectiveDishPrice;
          }, 0);
          state.checkTotalSum = state.checkTotalSum + dishCollectiveSum;
          state
          state.checkTotalSum = 0;
          const remappedCalculateMembers = check.members.map((member, memberIndex) => {
            const remappedSumPerMember = check.collectiveDishes.map((dish, index) => {
              if (dish.members[memberIndex].checked === true) {
                var sumMember = 0;
                sumMember = sumMember + dish.sumPerMember
              }
              else {
                sumMember = 0
              }
              return sumMember
            })
            // console.log(remappedSumPerMember);
            const add = (a, b) => a + b;
            let sumPerMember = 0;
            if (remappedSumPerMember.length>0) {
              sumPerMember = remappedSumPerMember.reduce(add);
            }
            // const sumPerMember = remappedSumPerMember.reduce(add);
            // console.log(sumPerMember)
            let memberDishes = 0;
            if (member.dishes.length>0) {
              memberDishes = (member.dishes.reduce((prev, cur) => {
                return prev + cur.price;
              }, 0) + sumPerMember)
            }
            memberDishes = Number(memberDishes);

            member.memberSum = ((check.serviceCharge / 100) + 1) * memberDishes.toFixed(2)
            console.log(member.memberSum)

            state.checkTotalSum = state.checkTotalSum + ((check.serviceCharge / 100) + 1) * memberDishes;
            return member
          });
          return {
            ...check,
            checkTotalSum: state.checkTotalSum,
            members: remappedCalculateMembers
          };
        }
        return check;
      });

      return {
        ...state,
        dishId: state.dishId + 1,
        checks: remappedCalculate
      };


    case 'ADD_SERVICE_CHARGE':
      const remappedServiceCharge = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {
          console.log(action.serviceCharge)
          return {
            ...check,
            serviceCharge: Number(action.serviceCharge)
          };
        }
        return check;
      });

      return {
        ...state,
        checks: remappedServiceCharge,
      };
    // case "ADD_DISH":
    //   const remappedDishes = state.checks.map((check, checkIndex) => {
    //     if (checkIndex === state.checkId - 1) {

    //       return {
    //         ...check,
    //         members: [
    //           ...check.members,
    //            {dishes: check.members.map((member, memberIndex) => {
    //             if (memberIndex = state.memberId - 1) {
    //               return {

    //                   // ...member.dishes,
    //                   dish: action.dish 


    //               }
    //             }
    //           })}

    //         ]
    //       };
    //     }
    //     return check;
    //   });

    //   return {
    //     ...state,
    //     DishId: state.DishId + 1,
    //     checks: remappedDishes
    //   };

  }
  return state;
};

export default reducer;
