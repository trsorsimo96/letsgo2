package cm.app.letsgo.repository.search;

import cm.app.letsgo.domain.Route;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Route entity.
 */
public interface RouteSearchRepository extends ElasticsearchRepository<Route, Long> {
}
