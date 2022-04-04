package request

import "github.com/labstack/echo/v4"

type (
	GoogleAuthPostRequest struct {
		token string
	}
	googleAuthPostBind struct {
		token string
	}
)

func NewGoogleAuthPostRequest(c *echo.Context) GoogleAuthPostRequest {

}
