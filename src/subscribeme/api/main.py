import google.appengine.ext.webapp
import google.appengine.ext.webapp.util
import simplejson
import subscribeme.api.oauth


class IsAuthenticatedAPI(google.appengine.ext.webapp.RequestHandler):

    def get(self):
        pass

    def post(self):
        client = subscribeme.api.oauth.OAuthClient('twitter', self)
        self.response.out.write(simplejson.encode(
            {'auth_cookie': client.get_cookie()}))


application = google.appengine.ext.webapp.WSGIApplication([
    ('/api/main/is_authenticated', IsAuthenticatedAPI),
    ], debug=True)


def main():
    google.appengine.ext.webapp.util.run_wsgi_app(application)

if __name__ == '__main__':
    main()
