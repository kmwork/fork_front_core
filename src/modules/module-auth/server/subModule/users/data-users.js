import { USER_INFO_DEFAULT_VALUES } from '../../../../../common/models/model-user-info';

import serverConfig from '../../../../../server/server-config';

import {
  ADMIN,
  USER,
} from '../../../common/subModule/roles';
import { TEST_PERMISSION } from '../../../common/subModule/permissions';

// import serverConfig from '../../server-config';

export function createTestUser(
  userId,
  username,
  displayName = null,
  otherProps = {},
) {
  const email = `${username}@local.com`;
  return {
    ...USER_INFO_DEFAULT_VALUES,
    userId,
    // username: serverConfig.common.features.auth.emailAsLogin ? email : username,
    username,
    email,
    password: '123456',

    displayName,
    firstName: 'Test',
    middleName: 'Testovich',
    lastName: 'Testov',
    computedDisplayName: displayName || otherProps.aliasId || userId,

    ...otherProps,
  };
}

export const ivanovI = createTestUser(
  serverConfig.common.features.auth.mockUsers.ivanovIUserId,
  'ivanovI',
  'Ivanov I. I.',
  {
    firstName: 'Ivan',
    middleName: 'Ivanovich',
    lastName: 'Ivanov',
    email: 'ivanovI@local.com',
    permissions: [TEST_PERMISSION],
    profileImageURI: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAC4ALgDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABgADBAUHAgEI/8QAQxAAAQMDAwIEAwQHBQgCAwAAAQIDEQAEBQYSITFBByJRYRNxgRQykaEVI0KxwdHwCBYzUnIkQ2KCkqLh8VOyFyZz/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQBAgUDBv/EAC4RAAICAQQABAQGAwEAAAAAAAABAgMRBBIhMRMiQVEFI2GBFCQyobHBcZHh8P/aAAwDAQACEQMRAD8AIbVlu0YbZtm0oQiIAEGnHk/FKVIBKkiT9aeSgFwKAlXTd9akpbCVFJjcR2pgzirLZSnd3V+P59OtPWTZEjZ8RU/d7CKdW2EtqUiCsHgK/CumyWgkqJ3QOPWgn0HH2oVO7k9QBXJYbdJ8oKUmYPTivUqChtTuQraZI7VIsUD7O6pW0giOB3mggbt2E7SIJPeD1rjYQAvqJiBxHvT6EkCEnieK8CT5ZVMQOOn9cUAchBWHFKTKQkTz6x/Gulty02Ek/wCH35ESa9WS229IKtyZ6dgRXrqdzLJQSPJJ7TyaAIsJUypxJk7on155r1SAoIkFMRyeZ+dPNtKS0otpBBJO09Kqc5nBjLu0x1nZu5DL3ZhmzYgKI7kk9B159vY1DkorL6BLPCLhLcJXPAgTHao6Ub4WAoDoB6VSnVDuOyDVnqjEXeEW6QGnXlBbKz6bxwDRAl1twBLTzSyedoWCSPoaiE4zW6LyiXFrhnLO0CCgEc89fWfzpxIGwqUOdpMGuHGj2nryIiDTq0ww6E9Sg9uCYP8AGrEERDfmYTHT3ntXN23ua7Ejp2qUYDjYKSI8oI+VcXAhCYgkHme1AHtqhC0gxyODPQ08nlKiy2N4hAKunXp+/mvUgdCmBAk+vzp+Ytxs6ylPA/hQBHRb7m1kiONvHc96cMhSoCQBHJnmKkOD4YIHO0evc9aj2+9xtRWI2kjaR/XaKAPLhi0vrVbL+19pwQpBFKnQkDn4SPL0IAE0qGkyU2uiAhtxG0Daoz6dv51KRABkgK9682Hd9+dw9P3V6U71qa43gAx8/f6UEEZ1CfiKG4JUORPSZrgp2lJIlUwoD1p5DJBJJSB3iuFKKlw3KuyiO3zoASiBAKO3YdOKfEIYBTI8/p2im0MjcRI3D8D8qkqSoNoCoBMnj07fuoAZbB6jse4612W0qIUpJ8pkdo/qa8XJSnp1MmqLVGTvLYWGOxCEry+TfDFtvEpR/mWr2SOaiUlFOT6QJZ4QQIZS4p1KyEy2Z9uhn8qqs1mrDBWDNxkntjakBCUpG4qVzASB1NBejM9ZaeZzNrqa5fYzCXnfi/HQpS3IEDae8cmPejbQWm3dQZW31Xn7ZSGG2gnF2TyeUJkn4yx/mPYfXsKU1mur0tLtlz7fU7V1OyW0psjqLUDdh9rtNFZj4Ck7kuPcCD0JSkFUVfeEOnL9p281VqNpSMtkP1bTa0bSwz7A8pmBx1gD1NaUNzaTvBE8kxyaH9Tawxum8O7fZl5TSlKUGrdPLjsGAUgHp79B615PUfFtT8Qh+HhDt+mR+GnrplubLnJYyzydo5aZG1t7m2c++y4nck+nHb50DX3g3o+4W45b2tzYqWCAba4UAn3AVNSNC+JeG1bdmzQV2d+eUMPx+tA/yqBgnrx1otyF8lhnaiC6eE9496znPV6GWxNwZ3+Xas9mQWLV5pPMJwubu13uKulFOPvXDEK/+JfoSOnb09itUhJSrclMRJPI96n5TD2maxbtlkbcPW7g8w5kHqCCOhHrWaX7V/4fXzabl9+/0vcrCfiPHeu1V2BPcfvjsevqfhPxmOpSpueJ/wA/9M6/TOHmj0HLqgt9tJSr1ntXF2vZbxCSeZEdq5+0Jc+C4hYW04AQpJkbSJBB7j+devxtO4FUSIHQV6AUH2VAtpMRx2HFSJhPHQDcfme1QWEypLYMAgRT9whS1OAFXBkx3Pt8hxQBMuFNtpVKtp6x6mOKhpStzatKhsUjcUxHJ/8AdPusfGZQhRJhCQrnrxSbZKGfhoPA4G7mpYHqUBCNqeAO1Kl0UQe3elUAMBYQDJAIrl1ZNy1t4EenaozxUoqUVGAIBivWrgpDfxVhRJgEenv/AF3oAkJbCNx5UZnrxXrbrXJhME8iIFeB5BQSVJ4+nNdNpBWFQefrQA2UHco9eflTziviAK7j8q9dSRuUpQCRySe1MEbhImCPvHjigDkugwRKp4Kew96HLt37J4jaPyN0P9jDrlmVxAStxEJn0kmKvtwKgSvuOlB3iSw7kLvTWFS8bdrI3wSt1IkpIgCPcbifnFcdTCM6Zxl00y9bakmja7zGt3mRbfLNs4WkGA40kqnpIURPHFDOs8tfXuZY0npx9VvkrhsOXd4jk2VsOq4/zq6J/H0qg/TusLbUrGlcarD5LIqtS7+k3t6S2yDwp9A43cdj5ifej7Q+lUaft7p965N7lb1SXby8WILqgOAB2SBMCvJaTQbMWWvK9Pr9TUlLfwvuUjXhjZ2bSX9PZzO4zIcb3hdG4D3+tDkgzUnB+FuItMm/lM6/cahyjogv5CClI9Etjyj8/ajthvhJB4gcdqp9Z5LL4rEl7B4peTulqLaW21AKQVAhK4PVIVE9OOa1YuTfHb/92RsiucAVrzSGh798Wrj+NwWoFEKtnrZxLLoVPlJQCARMeh9DUCx07rp1gWWWyeKs9vlVkGAp594DoQlQCUqjuabwXgfZXVsu71lf3l9mbolx5bD21CVHryQSo+549BFaHp3CXGCwFtjru+cyH2dS22n3R5/hbpQlXqUjifao1cYSgupNe6/giqLlLlYTMuz/AITH9Gu3ONzmadzSAXkOvv8AlcUBO0gRtnsQesUxoXI/310E8xnEKedCjZvKPVfTav2UJB+Ymi/xWy+UwmnEpw1k84X9zT16AVizQQAXClMqJgmCBAifSoOicXjcRpW1Ywlwm6tiN5uWyD8ZRPmVP5R2HFZnxG7bp4uX6s8P2x3z/RdwirMR6xyAHhy7c215ltN37m9/FOkNGYluYj5TB+SqPHkhTSVCex69poKCfheO2QCRtS9ayff9Wg/wo/SiFLBEjbNer0tjtphY+2kzJsW2TQyG3W0qdYR8RxKAEomATP8AKvSVKWU8iCOo/r0NPshSbcKSoAyAPbvXtupfxAiOe59eKYKnJn40boTsE+55/lTiSCDEx++l94GISeZ/GvAkSYUACY4oA6QlKivzKIHMwPwpVwkH40CCJ5nvSqVgBhDiJ+8I6E9qauEbm0vNAb0DoRwoehrzaNkRIHE+9P7dzQAPJPrE1UBph1m9b3tpSUnqCnv6H3rlwtWz6Up/V7oieAT6Coy7VbF2q4tIBVJdaB+97jtNSQ63cMrS+ISPvJUmTHyoAkOklJG3cSrgR0qJ8O4Vwo+SOVnqT6R2FSg2EK8qTsJnhcpH/uuFjy7ZgbpiTHXrQBDNmhaVDcvcoRxxHpVLrDCO5DEBy1cDORs1i7tniY2OI55PaQP3UWMMJQncASmOOaHPEa6VYaNy7rfC1M/CSf8AWQk/kTQ0nwwyXPgfb3eUsc7rK8aQMjl3ihlJMIS02ICR6J3SPkKYss14lYXN2eOytjZZeyvX220Xlk0VNMArG6Skdk7o3R6yaKtIYW7HhThsXjr/APRrrli2ftCWQ4pIWNy4STEncRPbrTGhfCzEaRum723vso9do677j4bZ47tpgH6zWPugnL9lg0tssJIMczlLTB2qLm8cKGVOot0AJKlKW4sJSAO/J/Cpy0r+IDAIiI/4qzXJXw1d4sY/EWqgvGacJvr1XVK7iIbR/wApM/OfStKU4ggI3eZcpECYjrXKUNqWe2dIyy2B2lPEPEal1LksPYB74tklSkuqjY+lKtqimOwJHXqOaIr25hkncnyKBUB1ggxWR+CWgszgdW5fIZi0Ns202u1ZKjPxipQJUn1TCRz71slw2htswkAGAT09hUaqEYtqHQUSk8OQAeKFvbrwTV9c22ULlo4FtXeMkv2hI8zm0EbkiACOZrObHMIxDv6SaNutpW168FoItcgxuAN00j9h5CiPiN8esVrGtli1wLzxzdzhUtKCxdW7Yc2SoAbkwZTzz04+VZHqbAX9ri8jl127TZQoKulWgJt3VLTCLxgdAFglDiB2M9hVKIQtq8OfTLX8T3IWJWMl4w5y8ZAWzbslsKAkdEI6+8KrRVSRKeZHp3rPPBzGLZxF7fuBSftDwQme6UDn/uJH0rQlzyJAkz863qalTWoR6SSMiT3NsacDi22DIS1JWr1PUR/H6CnGlBL26Y4n2r1XlZbT08v8TXLCVKWueeYE9On/AJroQONpJCuBMc8V6gSobdpT8q7b4+6QEyOvApxJJ3HykdB71bBOCMpvqT07+9KnVg9+tKjaiCuQ0oJhZn0gRTju1A2yNxICZ9fSorN4pRX+pdgcQUQT0p11a1qCfhkKKI8vSRVAH0tq28mee3FO/DSopUQN3YxUdpwLAQUrSFAyFDiIr34iG/hoSZQRAj0qU0A58KVqO1JVEEjifnTQSUqJ3KVHTd2pM8LkoUCST1nrXSkyqSIPzqGA6p3YOADPqOB86EvFRxB0LkeRG5v/AO4onRClEeWZKfnVBrPEqyOmMs0hxalrZ3oQRICkQoR89v50Aavou4D2lcGttKS0vH26kkHn7gmatr9K37C5RbvBh5ba0NvRu+GoggKjvB5+lAPgvl7V/wALsfcvvJQnGtOMPrPRCUGZP/JtNPaY8UNPZi1NzeXBxqw66hCH0LCVIB8qt8bZIgkTweKxvClubS6NVTjtWX2BXgje/wB1tU5fSObtXG85dPfFS/8AeDu1JJk+kSsHvuPet0CEkhSgkKTMKoSu9baQabLjmbsX3RtBFuS44YIMAIBUeeYppzLal1HLGm8QrGWSpSrI5hBTIP8A8duPMrjoVQKvKErZZxgrGUYRxnIrjxL05YZi4xWYeucZfMr2qTdMEJUOygpMjaRyDRMi7tsjjEXVlcNXNq8JbdaUFJUPYish1TpvC32UOl7VxzN6tyCkqv8AMXJ3KsmkxuIjyo44CB6ie1GugMHdaZ087hLsqW1aXrotXj/vWVQsKIHTlSgR6iq6quMIcdlqZylPD6CNxtDrakOpSpCwUKSoSFAiCD61QZ3R+Ky+lUafWyWbJoJTbhtRllSfukeseh6ir8BIISnyx0ArO9YeKmFx1itvBXKcplV+RlthJUlCjwFKPeD2Ek1n0QslL5Y3bKEVmYIeFV5cCzyOJuVb/wBHu7U+wJUCB7SCR86OneEeoAoT8O8E/hsQ45kAf0heKDrqSeUDsD78kn5x2oqJCkgpnb2r1S4jyYD74PXQQlMAztAMDrXjUNkD70D8TTrvLilGeOI96bSJ6DkcdetTjkg8AS4EK4MEwOs+lO7FJTKgAO3yrhAKCgI2lAV5gR1+VSE7V8EBMdKsShklUn+opV0oRyOe1KggigHpJmZ96QUeg3fM16jgEQfnXQTukKAKT1FcgOUspcC5O4T24I6cV0UpCQAIg8cV0pyFRCoIJn3npSILriOm4TFXxwBy6JWD0MdqSk+XiJquz2YssHaIfy1yhgEbUzKipXokDk1T4jXmAydylhFy4w7u2I+0I2BR9jJH41VgEDiYlIlJIkKnp2ru0QvcvepKhu44jiK9fRtVuiVdhXc7Ugn7pMR3qABfw1um9J68yOlcgEnFZcTbfEEpKjMJM8HcklB9wKJrbSWsNGJvkaGyFhc4115S2sZkASGkkDlKpHMyCJggA9Zql1jp5Ooce2GnCzfW5+JbvkxtV6EjmDA57EA0UeGOu/000MHqQC11HbjY4h0bftIj7yfVUdR36jg8KXxlF74fcapnGS2SBR7LeI6b4KvtTaVw6yeLc3DAB+kKP4mrTMWPixnkItf0libG0WPNc2L20LHrIBX+EVoN3pDTt3Yv2buExwt3x+sS3bpbJ99yQCD7zVrjrK3x1hbWVk2GbW3bS002CYSkCAOa4vUPHAwqfdgzoDQtho/GraacXc39wQq5u18KcPoPRI54+p5q/uFTcKATAA6+pqW+58NE9zQdq3UT2Htm043G3WUyNzIYZYbJTP8AmWrolI/P8xn3ydktvqxqpKCz6IHvF/VRw+H/AERjSXcxkx8NCEcqQ2o7Soe5+6Pqe1VGitNs6ew7LbraFXqhudXtBIJ/ZB9B09+tZlfZy+wOvbq9zoavco2VJfAc4QtSR5UkCBsnbA4HIo8w3iFhb0pRduLsXukPCUT/AKh/GK2tJTGmGDL1Frtm2wucHmB9DXnmUkHaBPT5V0hbbzaXmXEuNqEpWlQKT8iKcQncv59jTeBc9dG0hI6zJE14ggJWe5ED2pp5UpcUDBE/e7UzYXiLu3S6kcq4KQOlCeQySE+UpAPJ/OuwTzHFNKSoOoVwU9CCOR706qeIHehAeKIAKj2pVyqRKokdhSqG8AMp8wgcA10zISAoyR39a8SfSBHFIbQSR5iODHWqAOz1ryOw69K8/Z9CRE16DtHQAnrXTIAKdNsa08YTjMstwY6ytA78FCo3pASdoPYEq5I5gVp2c8L9KZLErsUYm2sSEw3cWqNjjZjrP7Q9QqZrP81d/wB2fEfTGoOU2z5NhdEGAEq4BP4z/wAtbyokHke1ZWslONiaY/plCUWmjANGP31rd5PTWYX8W+w7waDs/wCI2funnn0g+hHpRDkb+0xVkX8jcIYZbPC3D94x2HUn2oM8RsyjS/jBnb4sfGU9aMpSgGAVlCIk9h5f6mqPGYHK6wvUZXUTzjVrH6psDaSn0Qn9lPv1P51oVZsSwIzSi2ifd62zGossjEaOslh1wHYtQBdWAJJAPlSB6mfpRRgPBm5uFG91RmnxfK80WapUlXYlxXUj2A+dB+WbToTW+FzuPt/9gRCVtp7wClafmUknnqa+ksZf2uTx9vfWDyH7V9AW24gyFA/107Vl/FLr6JKMeEN6SuuxZfYE/pDWejLJ1zIJY1RibdO4voV8G8bQOpUkyFwPr705j/GfR920HHbq6syf2H7dR/NEijwwQe1Yv4kaQ8P7HIB29yTuEvX/ANZ8G0T8RKufvFuDtEz0IFKabUK17LE8+6GbIygsxf8As0jF6rx2dcKscbl63CSpVybZbbKAPVawB+E0H6s8RUF79DaKQctnHyUoUz5mmfUz0UR/0jue1CLmK0M5Y2z+b15kshbK8rVslSpEdtkKUn6xRxpPVnh3i91phru1sVrAClPNrQV+m5xQ5+pq0q1HM1Fy+38h40pLa2kZLqPRjOL1ZhMZe3P2jKPoTc3jhG9JWpS1Ec9QEp6nrM96t8vofFPO7mg7buL8oLJlIMd0n5doqSHxqLxRz+VQUKs7YC2YX1CiAEyk/IKPyVRK4kqQr4akhccSJr0Wkrbpi59syb5Ym9plF5Y6k0bN1jrom1J5LfKFf62z04H/AJo10l4j2178C3zaE2dyU71Op5Z+vdP1kfKmNQuC4fDVunc2z0HYn9o1neYctnsi99iMuqQv4hSISTHQR39x+ddrKVCO5M5wt3SwbxkUm7xahbkOJdgpKFfeE9j/ABpuz+Dj1hlLfwwqOE+bk9iaxPR2qr7TmXTbXRdTY7kh5hXKQD+0B2Pf6GtyubYXKmn7dW4FSF7geFo/lS6TOpOMqkdPf/xXK1hBSD+10+deklCwVIgEABVR31hOxSkKUoE7YPUniP8A3VmA8kHYCojfAnb0mlXLap3DbtUOCfXiaVVfIHBCSs9Y6RSKRPaD6dTXS0gmSOe38abbWds8p4kBQ5A6c1UDsAgI9T6dqc4jggD09KQRAJ3cnvXszxV1wAN+JGPGQ0bkED/EZQH2yexT1/KaObbWrGM8KbDUuR/WLNm35JguvRt2j5qBn0Ems51Y5cajzNlo/DrH2m7IVduDkMMiCZ+nP4D9qjXWum3X8joPBWFm8vA2lzvuNqJQhLaRs3n383zJNI6pxlJJjNCkk2jOE6D1trO+Op8onG2jr+11KL3ygIA8v6sAwAIjdzxJq5f094iYj9Y5aYrLM9Ytndrh+QMUc6/1EzdaN17aspPxcZbm3dIP3i42DxHSNxH0qh8Ixe4vJZHTb+RfvbK2x9pesB/lTJdTKkA/5eeBVFqLYRc48Y9Dp4NcpJP1Ba1yGP1Oxd4nJ2rtreJ/xbR8bXEEftJPt/XFUtrZaq0Ml97TmUnGp3OONqggDuShXBPuKPfHHHt2uMs9S2iAjIWL7banEiCttRiFesH8iaHfEK7+z6TuSj/flDKY9FGT+QNO02Q1lO6a6Fra3RZtizSvDLVLuqdIjJZBtDT7Ti2nigbUK2gHcB24PT1msSyrBymEzOuM0kvOX14bXHW5Mpnnzq9UoSICe568cUS6U1StvQlnpTSti9lM3cML+0LQmG2C4TulXcgGJ4AI6npVhq3Tx05hPDbEXrqXG2cnNyofcKlKSo/QSRPesrTVKqcnjGXx/gbm98Vn0ImE8KMfhNK3Ge1mq4eUwwbj9HsL+GEiJCVLHJUTA4gCe9RcE3jstqjT+MvNC43G4nLpUthz4rin1ICSdwWFDvHUVqfjU4EeGeeJJAKEAx7uJoBt3mm9f6KWlU22F019seI6AfCUZ/NNMRnKSyyJQUWkihusA5jzlcx4d3V1fY3HXCmL7G3KIII6ls/tgDv1A9elP22o7TI4Zp+xclx7y7f2myOs+/8A7o88BrNbegn71zlWQvHbkE+nCf3g1n/iNp8aU1azeWKENYjKqI+GkQGneqh7DkEexI7UzpNXtu8KfQvqNPmrxYg5nb77NbKt2d/x7yW2wkQT68/X99OaZwTdg2pbgQ8+tspUQeU8cge1OXFsVZgXKkyhpmG/9RJk/hFWDbxbCVDkASUn91bShmW9/YzN2FhApqTDqNui7CAFoMlUD7hPH5/vrRvCvLqusGuxdILtiQkFX7SFSU/gZH0FUd2lp23S3tlpQUg7uoFUHhpfKsNbotHFD4byDaKKpieVJPvyPzpXUw2yUvcYollbTcFKkciDTTqT1ME12EgOLVAKjAKqS0xAVwTyB7Vwxk6jaJSSCIA5n1pV0roSJJPalUPADKzwkmYroAdSeSD/AApIB2pBPASJ+ddQCoDmOe1QlkBJHlSJJMdTTF24bayuHko+IpttSwj/ADEJmPyqT0THevAPN1APvVgGPADGMrwF1qN5wXGUyb6w64eraUq4R7c8/wDT6VqtfPPgpkMoNe39pgG1u6bdeW5cBX3Gk8hCweypAAHcfKR9DCsXUJqx5Zp6d5gjDAw2rVXiTpfI3Tdne50ByzW+ra2qZKfN/wAw46naRRnpXTmSxGrcte5BCCy5jbG0ZfQryuqbTC4HUcjv6ipPiV4fWetbZtz4v2TJsDa1chMgp67FjuJ5HcfU1m7HhrryyT9na1Ei3tyerd89Ef6Yq83GVbzLBVRlGa8uS98er9n+7tphgsfbL65QoN9whMkqPoJIH4+lZdre+fOJt7dTu9Ac3pSrn7qT/Opmb0zdab1lZ2t3khkbl1gvuOQolI8wAO4knpVRrgf7Paj/AIlyPTgVp6KqNekk4vORHVWOd6ysGnaPvHPCq/csM004vAZHY+zfttSW1lIlKo6/LrxImTUFGEufFzVOZydy463hbZCraxUONqhyiAf+pXT7wra2WmriybbebbdbKEgoWkKSeB1BrF/D7XGM0bf5rHXQfcwLl6tVrettEgHoQR3EBPTn2g1kabUSuUml5kOzgoNJvgJLa88Q9OsIx+QwNvqW0bEJuG3ZWodgqese6fxqPnrnXWsrRzENaWbwVpcJDT15cOgqS3IJSOnBjoBz0oie8W9FIZK/0yFcdBbuT/8AWudO+KGL1FnbXHYTHZS4aeJCrssBLTcAmTz04/OuuZLnaT5W8bguxOLt8LgbXGWki3tWQ0knqQByT7kyfrQb4s4lOY0FkkbZdtkfamvZSOT/ANu4fWj64VDcdzVRk0Icxt4h2PhqYcSqfQpM0jOeLFJdjainW0fMuKzzT6kW94A26YTvHCVfyNXRbA2oSTHT8KCrDFfb8W66yT8dpQ2c8KAEkfOiDS9+u8x6Uuq/XNHYrnqI4P8ACvYUWyaSn69HmbYJPMS8C9luRAUlS+h79CaDXrr7Fmbe+aZG5KkuSevlVzRXdkpsX1qMBAmAe54oHzCFN/CUDAIIn6VGr/SWoeGfRanfiIJiUK8wpN/DhSiFTEAR2qHjHDc4uydiC4yhcdf2RTweSd5SJShZSqDMUoMDzsN25e3eVKSTx0pVStOfb7t/a7Hw0FKdh4837Ug80qjKLJIs0LCglX0I9KcTCUAA8CmTxI9T1NdKWSfKJmoT9yp2dsdefasy8R9UOOrucRiXClllJN4+g8+hbB+fB/CijXee/QeAdeaWEXj5+CwOsKPVX0HPzisutrFxOl7pZBU++n4ip6kTIn6SfrV4xc20vQrKW0+jPBrBN4PQON2pAuL1AvHlRySsSB9EwKN6zrAalvr3witclpa3YvcpaW6GVWy5+83CViAQZ2iQO8ir3QetMbrDHB20UGr1sRcWaz+sZV347p9D+MGsOcJZcma8JRSSRS//AJg0kh15q4uL5h5pxTam3LNe6QY7T+dDeZ8XlZW7FhorD3WQvViELdRAHvsHP4kCtC1JpbTuVWbrLYmxffA8zziIVHuoR+dZ7nNe6a0lauWGkbW1fvlHaE2yAGkK9VrH34PYT8xRmM3tjDL/AGIe6PMpJL9zPMZcP5e7ucxkrl24yDxLbiliNgHYAdBEVX64AGPZUAeFqme0j/xXGknVoub5pZKiCFmPWTNTNUsleIJ7IWlX06fxr0qivw+EvQw234vJ9M4l5FzirJ9sktusNrB9ZSDWa+GV/a6aymW0VqIstr+1KuLNdwB8O4SoCI3cSQAR9R1FGPhxdpvNB4F1Ct3+yIbJPqnyn91DXjza49eh3bq6tmnLxt1pq2eUnzNlSuYPpAPHSvGaWey51e7wb1i8qn7GgJ01hQorRhscFnncLRv+VSvtVhZtqb+PaW6GzBRvQgJPykRXy3hmMgvHWrqMzkmUqQCW231BI69OfSoF1a4/G562ezaX8haPEqeCXdjpPdW7ue/PWtyegsjHfJ8CcdbGUtqR9WJu27tKXrd1t1o/dW2oKSfqOKEvFLNt4PReQcK0i4uWzasJJ5KliCfomTQ9Y+I2idP6fYtsIX1NNg/DtG2VBQJMncpXAknrJrKM9m8hr7PC5vJbtGPKhtB8rKCeg9VHuf4Vn6bRTtt5XA3fqoV14T5JWlmzb4pDieC4orHy6D91QcMRbanyNsiAlQDgj5zH/caI1JS20EITCUjgRwPShpok6wvHBzDQH5Jr1ko7NiMBSzubLrIvJ+C80SkBaZ4HoaDc6opbbKVebkx9O1Xt++H31EKlKPKIqgy6vjPttIA4B6e/FcNQ8pl6kbzpxITgcYmSQLVoAnr90VOLLaWlJQhKRO7aB3mZ/GuGmy0hpG0+RCUx8gBT6fNyeFd6WXKO5whtCSVhCQtXBMCT86VeuLgARSobwBxB3EzxXsnd39uaYs7lu5QFII3DrzT/AH7zVcAY94m3ysrrBnGJJDduEteU8FSoKj84IH0qzbRwUhMIjaAe49KEsxcpa8Q75xSgEi9UDu6feifzoxG1JVE7vc07pFwxa/tELTmeyfh7lFXWPT8bG3DkOsrJCFjsCf2VDsqiDU4w+sH0aj0Lemw1OkhT9gp0MPOH/MgyAVesGFfPrXwly1W2tIUniQenvNUl3puwfXub3s8yUpMgfQ1xv0LlLfX2dq9ViO2XQX3OldRZW2RdeIurW7GzQAS0u4StUR/lEIn8TQLnE4I5Wzt9MM3JxrCti724USq4c9gYASI4EdyfSp1vgLBC0KcC31jp8RUgfSq/Vrgacsrdo7du5exAiB0FcY6KVK8ScuvRdHR6lWeWMRnSsHK3gJHmRuPP/EP51f5hIOFvARJ2THrBn+FUmkADfPE7f8HqPmKIskjdj7hM8/DUOfWKeo5pefqKz4nk1PwMf+N4cWKZB+C882fbzk/uVVV/aLcCdGWLZMb75Ko9YQv+dOf2dllWirxBV9y+X29UINV39pNwow2ERwQq4dVz7IA/jXja4Ja7H1Nyb/L5+gIYpoN2Nu3uA2tp6jp5apMjDuq7JvqhLXIUAR0Uf5VesmEoStQjaIn5cUOv7W9Y2hX90oCQZ46EV7a3pJ+6MGDyyc5g8e4uVNrbEztQsgfhViww1bNBq2bS2gGQB/XWnFkSTA3HoY4+tIJhUgBQn1710UIx6RRtvhnj6ykGeT6R0oZ3OM3+SecBCnVbEeWJEAz+EVf3qw0ytx49ifc1QrcNw8p10kmIj09qpbjgmHqcMkKSBIHyHNM6Vtv0praxbVJb+KFmem1Hm/h+dRcpdBpCmGyApY5PtH76OvCDElDd3l3UkFf6hgn0mVH5TA+hpC2WXhDVawsmmJJUCVfenpXI8szJnrXLYG0biYPPSuysESn7p5mKrkuc7eSSSTPelXR5JPSKVQ8ABlhdJOx61dKm1iUlJn+vkaILTJIcITc/q1dldjSpVK5RRvDwZB4q4dWO1K5eNJ229/8ArEqT03QAsfPv9akaayyblhq2uHB8cABKj/vAP4xSpVambhPgLEnFhK3/AITpPSBUT7ShbTi0EbUjkkQPnSpVqiZBdySEIKmSVK7mfKP50NtXrYyzl3dNOvJ2KDYSY820hKjPYEz9KVKs3UTbeGN0xSLDRW1KrlauqQlBA7jmiK7A+yvgAwW1Dg+xpUqaoXykcLX52G/9m5X/AOqZZMdL4df/AOaaif2kxOOwBiYee59PKilSrxsH+fa+v9G4+dMC6QOAoDpHShbV263ubW7STx5ArsFAyP40qVez1CzWzCr4ngJcbdtZC1bfaUCFCFJP7J7innFNtplSgEg9elKlV4ybhuBrzYB3I3argErV5RwOaqXr1Fq2WVbVukkBIV+Z9KVKk7JNLJ2jFDWnsJe6kzIZb3Bvhb7xEpaST1+foK33HWbNhZs2tsj4duyjYhA54Hr795pUqWjydiWkEdKRRPHalSqwEHIZBixQty4dCUoEqJPA+dKlSrnKW1nWuCkuT//Z',
  },
);

export const korolevaU = createTestUser(
  serverConfig.common.features.auth.mockUsers.korolevaUUserId,
  'korolevaU',
  'Koroleva U. A.',
  {
    displayName: 'Koroleva U. A.',
    firstName: 'Uliya',
    middleName: 'Alexsandrovna',
    lastName: 'Koroleva',
    email: 'korolevaU@local.com',

    roles: [
      USER,
      ADMIN,
    ],

    profileImageURI: 'data:image/jpeg;base64,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',
  },
);

export const USERS = {
  [ivanovI.userId]: ivanovI,
  [korolevaU.userId]: korolevaU,
};

export const TOKENS = {
  [ivanovI.userId]: 'fakeIvanovIToken',
  [korolevaU.userId]: 'fakeKorolevaUToken',
};
